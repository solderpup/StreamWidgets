import { OBSWebSocket } from "obs-websocket-js"
const obs = new OBSWebSocket()
import * as waybar from './servers/waybar.js'
import settings from './settings.js'

const obsAPI = {}

/**
 * Refreshes the browser source in OBS
 * 
 * @param {string} inputName - The name of the input to refresh
 * @returns {Promise<void>} - A promise that resolves when the refresh is complete
 */
const refreshBrowserSource = async inputName => {
    try {
        await obs.call('PressInputPropertiesButton', {inputName, propertyName: 'refreshnocache'})
        console.log(`Refreshed obs browser source ${inputName}`)
    } catch (err) {
        console.log(`Failed to refresh obs browser source ${inputName}`)
    }
}

/**
 * Connects to the OBS WebSocket server, sets up event listeners, and refreshes browser sources
 * 
 * @returns {Promise<void>} - A promise that resolves when the connection is established
 */
obsAPI.connect = async () => {
    try {
        const {obsWebSocketVersion, negotiatedRpcVersion} = await obs.connect('ws://localhost:4455', '40QxzWqNCK7dLKGW', {rpcVersion: 1})
        console.log(`Connected to obs server ${obsWebSocketVersion} (using RPC ${negotiatedRpcVersion})`)

        refreshBrowserSource('Chat')
        refreshBrowserSource('Fetch')
        refreshBrowserSource('Waybar')
        refreshBrowserSource('Lock')
        refreshBrowserSource('Calendar')
    } catch (err) {
        console.log('Failed to connect to obs server');
        console.log(`Attempting reconnect to OBS in ${settings.obsInterval / 1000} second(s)`)
        return setTimeout(obsAPI.connect, settings.obsInterval)
    }

    obs.on('CurrentProgramSceneChanged', event => {
        waybar.io.emit('CurrentProgramSceneChanged', event)
    })

    obs.on('InputActiveStateChanged', event => {
        waybar.io.emit('InputActiveStateChanged', event)
    })
}

export default obsAPI