import express from 'express'
import { createServer } from 'http'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { Server } from 'socket.io'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const server = createServer(app)
const io = new Server(server)
const port = 3100

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'chat.html'))
})

app.use(express.static('public'))

export { app, server, io, port }