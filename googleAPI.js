import fs from 'fs'
import { google } from 'googleapis'
const OAuth2 = google.auth.OAuth2
const youtube = google.youtube('v3')

import settings from './settings.js'

import * as chat from './servers/chat.js'
import * as fetch from './servers/fetch.js'
import vtubeAPI from './vtubeAPI.js'

const googleAPI = {
    oauth2Client: null
}

/**
 * Top level function to connect with an existing token or generate a new one
 */
googleAPI.authorize = () => {
    fs.readFile('./client_secret.env', (err, credentialsJSON) => {
        if (err) { // No client_secret.env
            console.error('Failed to load credentials. Please save your client id, client secret, and redirect uri to client_secret.env')
            return
        } else {
            let credentials = JSON.parse(credentialsJSON)

            googleAPI.oauth2Client = new OAuth2(
                credentials.client_id,
                credentials.client_secret,
                credentials.redirect_uri
            )

            fs.readFile('./google_token.env', (err, tokenJSON) => {
                if (err) { // No google_token.env
                    console.log('Failed to load google api token. Generating new token...')
                    generateAuthUrl()
                } else {
                    let token = JSON.parse(tokenJSON)

                    if (token.expiry_date < Date.now()) { // Token expired
                        console.log('Existing google api token is expired. Generating new token...')
                       generateAuthUrl()
                    } else { // Token good
                        googleAPI.oauth2Client.setCredentials(token)
                        console.log('Set existing google api token')
                        startTracking(token)
                    }
                }
            })
        }
    })
}

/**
 * Output an auth URL to terminal for user to click
 */
const generateAuthUrl = () => {
    const scopes = ['https://www.googleapis.com/auth/youtube.readonly',
        'https://www.googleapis.com/auth/youtube',
        'https://www.googleapis.com/auth/youtube.force-ssl'
    ]

    let authUrl = googleAPI.oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes
    })
    console.log('Authorize this app by visiting this url: ', authUrl)
}

/**
 * Take code from redirect URL and generate and store a respective token
 * 
 * @param {String} code Code from redirect URI
 */
googleAPI.getTokenFromCode = code => {
    googleAPI.oauth2Client.getToken(code, (err, token) => {
        if (err) {
            console.error('Error while trying to retrieve google api access token', err)
            return
        }

        googleAPI.oauth2Client.setCredentials(token)
        storeToken(token)
        console.log('Set new google api token and saved to token.json')
        startTracking()
    })
}


/**
 * Saves a token to google_token.env
 *
 * @param {String} token Token from getTokenFromCode 
 */
const storeToken = token => {
    fs.writeFile('./google_token.env', JSON.stringify(token), err => {
        if (err) return console.error('Error storing google api token', err)
        console.log('Google API Token stored to google_token.env')
    })
}

/**
 * Once client is connected, setup listener for new tokens and intervals for api calls 
 */
const startTracking = () => {
    googleAPI.oauth2Client.on('tokens', token => {
        console.log('New token received')
        storeToken(token)
    })

    getChannel()
    findActiveChat()
}

/**
 * Once client is connected, call api to find chat id
 */
const findActiveChat = () => {
    youtube.liveBroadcasts.list({
        auth: googleAPI.oauth2Client,
        part: 'snippet',
        mine: 'true'
    }, (err, response) => {
        if (err) {
            console.log(`Couldn't find active chat. Trying again in ${settings.findChatInterval / 1000} seconds`)
            setTimeout(findActiveChat, settings.findChatInterval)
        } else {
            const latestChat = response.data.items[0]
            let liveChatId = latestChat.snippet.liveChatId
            console.log('Chat ID found', liveChatId)

            getChat(liveChatId, null)
        }
    })
}

/**
 * Fetch channel info and push to fetch window
 */
const getChannel = () => {
    console.log('Getting channel...')

    youtube.channels.list({
        auth: googleAPI.oauth2Client,
        part: 'snippet,contentDetails,statistics',
        mine: true
    }, (err, response) => {
        if (err) return console.error('Error getting channel data', err)
        
        //console.log('channel: ', response.data.items[0])
        fetch.io.emit('channelUpdate', response.data.items[0])
    })

    setTimeout(getChannel, settings.channelInterval)
}


/**
 * Fetch chat events using global liveChatId and nextPage variables, and push to chat, fetch, and dunst windows
 *
 * @param {String} liveChatId User's chat ID from liveBroadcats.list
 * @param {String} nextPage nextPageToken from liveChatMessages.list
 */
const getChat = (liveChatId, nextPage) => {
    console.log('Getting chat...')

    youtube.liveChatMessages.list({
        auth: googleAPI.oauth2Client,
        part: ['snippet', 'id', 'authorDetails'],
        liveChatId,
        pageToken: nextPage
    }, (err, response) => {
        if (err) {
            console.log(`Couldn't find active chat. Trying again in ${settings.findChatInterval / 1000} seconds`)
            setTimeout(() => getChat(liveChatId, nextPage), settings.findChatInterval)
        } else {
            const newChatEvents = response.data.items
            newChatEvents.forEach(chatEvent => {
            
                //console.log('chat event: ', event)
                chat.io.emit('chat_event', chatEvent)
                fetch.io.emit('chat_event', chatEvent)

                if (chatEvent.type == "superChatEvent") {
                    vtubeAPI.parseSuperchat(chatEvent)
                }
            })
            setTimeout(() => getChat(liveChatId, response.data.nextPageToken), settings.chatInterval)
        }
    })
}

export default googleAPI