/* TODO
    Consolidate the servers into one server with subdirectories. I think that's a thing you can do. It'd probably be better.
    Add Dunst.
*/

import * as oauth2 from './servers/oauth.js'
import * as chat from './servers/chat.js'
import * as fetch from './servers/fetch.js'
import * as waybar from './servers/waybar.js'
import * as lock from './servers/lock.js'
import * as calendar from './servers/calendar.js'

import obsAPI from './obsAPI.js'
import googleAPI from './googleAPI.js'
import vtubeAPI from './vtubeAPI.js'

oauth2.server.listen(oauth2.port, () => console.log(`oauth2 server running at localhost:${oauth2.port}`))
chat.server.listen(chat.port, () => console.log(`chat server running at localhost:${chat.port}`))
fetch.server.listen(fetch.port, () => console.log(`fetch server running at localhost:${fetch.port}`))
waybar.server.listen(waybar.port, () => console.log(`waybar server running at localhost:${waybar.port}`))
lock.server.listen(lock.port, () => console.log(`lock server running at localhost:${lock.port}`))
calendar.server.listen(calendar.port, () => console.log(`calendar server running at localhost:${calendar.port}`))

vtubeAPI.connect()
obsAPI.connect()
googleAPI.authorize()