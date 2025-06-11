import WebSocket from 'ws'
import fs from 'fs'

import settings from './settings.js'

const vtubeAPI = {
    loggedIn: false,
    websocket: null,
    commands: {
        bald: {
            tier: 1,
            hotkeyID: "Bald",
            triggerWord: "Bald"
        }
    }
}

/**
 * Top level function to connect and login to the api
 */
vtubeAPI.connect = () => {
    vtubeAPI.websocket = new WebSocket('ws://0.0.0.0:8001')
    vtubeAPI.websocket.addEventListener("error", err => {
        console.log("Failed to connect to Vtube Studio API")
        console.log(`Attempting reconnect to Vtube in ${settings.vtubeInterval / 1000} seconds`)
        vtubeAPI.websocket.terminate()
        setTimeout(vtubeAPI.connect, settings.vtubeInterval)
    })
    vtubeAPI.websocket.on('open', async () => {
        console.log('Connected to VTube Studio WebSocket');

        fs.readFile('./vtube_token.env', (err, token) => {
            token = token.toString()
            if (err) {
                console.log('Could not open Vtube Studio token file. Generating new token...')
                getNewAuthToken()
            } else {
                authenticate(token)
            }
        })
    })
}

/**
 * Make a request to the Vtube API
 * 
 * @param {Object} request A Vtube API request
 * @returns {Promise{Object}} The response from Vtube API or an error
 */
vtubeAPI.sendRequest = request => {
    return new Promise((resolve, reject) => {
        vtubeAPI.websocket.send(JSON.stringify(request))

        vtubeAPI.websocket.on('message', data => {
            resolve(JSON.parse(data.toString()))
        })

        vtubeAPI.websocket.on('error', err => {
            reject(err)
        })
    })
}

/**
 * Make a request to the Vtube API for a new auth token, requires user interaction in Vtube
 */
const getNewAuthToken = () => {
    let authRequest = {
        apiName: "VTubeStudioPublicAPI",
	    apiVersion: "1.0",
	    requestID: "newAuth",
	    messageType: "AuthenticationTokenRequest",
	    data: {
	    	pluginName: settings.vtubeAPI.pluginName,
	    	pluginDeveloper: settings.vtubeAPI.pluginDeveloper,
	    	pluginIcon: settings.vtubeAPI.pluginIcon
	    }
    }

    vtubeAPI.sendRequest(authRequest).then(response => {
        if (Object.hasOwn(response.data, 'authenticationToken')) {
            fs.writeFile('./vtube_token.env', response.data.authenticationToken, err => {
                if (err) console.error('Error storing vtube api token', err)
                console.log('Vtube API Token stored to vtube_token.env')
            })
            vtubeAPI.loggedIn = true
            console.log("Logged in to Vtube Studio API")
        } else {
            console.error("Failed to generate new auth token")
            console.log(`Attempting reconnect to Vtube Socket in ${settings.vtubeInterval / 1000} second(s)`)
            setTimeout(vtubeAPI.connect, settings.vtubeInterval)
        }
    })
}

/**
 * Authenticate with an existing token
 * 
 * @param {String} token The Vtube APi token from vtube_token.env
 */
const authenticate = token => {
    let authRequest = {
	    apiName: "VTubeStudioPublicAPI",
	    apiVersion: "1.0",
	    requestID: "Reauthenticate",
	    messageType: "AuthenticationRequest",
	    data: {
	    	pluginName: settings.vtubeAPI.pluginName,
	        pluginDeveloper: settings.vtubeAPI.pluginDeveloper,
	    	authenticationToken: token
	    }
    }

    vtubeAPI.sendRequest(authRequest).then(response => {
        if (!response.data.authenticated) {
            console.log ("Existing Vtube API token rejected, generating new auth token")
            getNewAuthToken()
        } else {
            vtubeAPI.loggedIn = true
            console.log("Logged in to Vtube Studio API with an existing token")
        }
    })
    
}


/**
 * Take a superchat and compare to list of commands to send request to Vtube API
 * 
 * @param {*} superChat The superchat object from the Google API
 */
vtubeAPI.parseSuperchat = superChat => {
    for (command of vtubeAPI.commands) {
        if (superChat.snippet.superChatDetails.tier >= command.tier && superChat.snippet.displayMessage.includes(`!${command.triggerWord}`)) {
            let request = {
                apiName: "VTubeStudioPublicAPI",
	            apiVersion: "1.0",
	            requestID: `Hotkey${command.hotkeyID}Request`,
	            messageType: "HotkeyTriggerRequest",
	            data: {
	            	hotkeyID: command.hotkeyID,
	            }
            }
            vtubeAPI.sendRequest(request)
        }
    }
}

export default vtubeAPI