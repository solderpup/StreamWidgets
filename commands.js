import vtubeAPI from "./vtubeAPI.js"

export default new Map()
    .set('specs', text => {
        return "CPU - i7 6700k | GPU - 2060Super | Memory - 16GB DDR4 | Mobo - Asus Prime Z370A"
    })
    //TODO - make bald add a timer or superchat dependent
    .set('bald', text => {
        if (vtubeAPI.loggedIn) {
            let request = {
                apiName: "VTubeStudioPublicAPI",
	            apiVersion: "1.0",
	            requestID: `HotkeyBaldRequest`,
	            messageType: "HotkeyTriggerRequest",
	            data: {
	            	hotkeyID: "bald",
	            }
            }
            vtubeAPI.sendRequest(request)
        }
        
        return null
    })