# Solderpup's Stream Widgets

## Disclaimer

Oh boy, this code is a mess.  
This is a basic Node JS Express App that hooks into Vtube Studio, OBS, and Youtube's APIs. It can activiate Vtube Studio Hotkeys based on Superchat messages, can trigger display changes based on scene changes in OBS, generate schedules, and primarily it displays chat messages to a window stylized to match a [Tide](https://github.com/IlanCosman/tide) prompt.  
I don't have Youtube monetization yet. I havn't even tested the Superchat and membership functionality. For all I know, they don't even work. There's a lot of TODOs here.  
If anything, I hope this code at the very least provides someone a gateway into making their own Stream Widgets.  
Please do not simply use these widgets as they are. For one, they're laughably unstable. For two, they provide something unique to my channel, please add your own spin on them and their CSS. For three, I barely protected against XSS, I know next to nothing about cybersecurity. For the love of all that is good do not trust this code to work.

## Requirements

1. [Google Developer Console Project Credentials](https://console.cloud.google.com/apis/credentials). You must first create a new project. Then, under APIs and Services > Enabled APIs and Services, click "Enable APIs and Services", search "Youtube Data API v3, and enable it. Next, under Credentials, click "Create Credentials" and create an API key. It is highly recommended to restrict this key in some way. At the very least, restrict it to only access the Youtube Data API v3. Next, Create an Oauth Client ID. You will be walked through setup of a Consent Screen. Enter your project information, then click "Create OAuth Client". For Application Type, select "Web Application", and enter a name for your client. I chose "Node JS". Under "Authorized redirect URIs", click "Add URI" and enter a redirect URI, the Stream Widgets are configured to assume you choose "http://localhost:3000/oauth2callback" Click create, and write down your "client_id" and "client_secret". Create a new file at the root project folder and call it "client_secret.env". Enter the following:  
```
   {  
        "client_id": "your-client-id",  
        "client_secret": "your-client-secret",  
        "redirect_uri": "http://localhost:3000/oauth2callback"  
   }
```  
3. [Node JS](https://nodejs.org/en)
4. Vtube Studio Connections Enabled. In Vtube Studio, under Settings > General Settings and External Connections, toggle on "Start API (allow plugins) under "Vtube Studio Plugins".
5. [OBS Websocket](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-using-websockets.466/). This is included in OBS v28 and above.

## Usage

1. Install the required packages through NPM.
2. Run "node index" from the root folder. It is recommended that you start Vtube Studio and OBS Studio beforehand, but at the very least the app shouldn't crash if you don't. Click the link in your console to authorize your app with Google, and authorize your app with Vtube from within Vtube Studio.
3. Pray.

# THE MOST IMPORTANT PART

I'm gonna keep it real here. Do not use this code. I regret using this code. By publishing it I am opening myself up to public ridicule and probably XSS attacks. Instead, use this a springboard to create your own app. Here are the relevant docs I used to create the app:  
[OBS Websocket JS](https://www.npmjs.com/package/obs-websocket-js) - Node JS package for interacting with OBS studio.  
[OBS Websocket](https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md#events) - OBS studio's docs for interacting directly with the websocket.  
[VTube Studio JS](https://github.com/Hawkbat/VTubeStudioJS) - Node JS package for interacting with Vtube Studio. I'll keep it real, I couldn't get this to work, and instead interacted directly using ws.  
[WS](https://www.npmjs.com/package/ws) - Built-in Node JS package for interacting with websockets. Used for interacting with Vtube Studio.  
[Express](https://expressjs.com/) - Web framework for Node JS, used to spin up dynamic pages for display in OBS Studio.  
[Youtube Live Streaming API](https://developers.google.com/youtube/v3/live/getting-started) - The Youtube API. Useful pages within include the [Chat Message Reference](https://developers.google.com/youtube/v3/live/docs/liveChatMessages), [Channel Reference](https://developers.google.com/youtube/v3/docs/channels), and [Client Side Web App Quick Start Guide](https://developers.google.com/youtube/v3/live/guides/auth/client-side-web-apps).  
[Youtube API Samples](https://github.com/youtube/api-samples/tree/master/javascript) - JS code samples by Google, much better written than my stuff.  
