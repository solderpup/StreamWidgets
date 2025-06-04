import express from 'express'
import { createServer } from 'http'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { Server } from 'socket.io'
import googleAPI from '../googleAPI.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const server = createServer(app)
const io = new Server(server)
const port = 3000

app.get('/oauth2callback', (req, res) => {
    res.sendFile(join(__dirname, 'oauth.html'))
    let code = req.query.code
    if (code) {
        code = decodeURIComponent(code)
        console.log('Authorization Code: ', code)
        googleAPI.getTokenFromCode(code)
    }
})

app.use(express.static('public'))

export { app, server, io, port }