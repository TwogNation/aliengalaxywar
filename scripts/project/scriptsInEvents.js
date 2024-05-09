
var postMsg = ''

function postText(value){
	console.log('iFrame sender: ' + value) 
	parent.postMessage(value, "*")
}



const scriptsInEvents = {

	async Game_Event61_Act6(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:100") 
	},

	async Game_Event62_Act6(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:100") 
	},

	async Game_Event63_Act6(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:100") 
	},

	async Game_Event64_Act6(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:500") 
	},

	async Game_Event74_Act16(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:500") 
	},

	async Game_Event75_Act17(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:500") 
	},

	async Game_Event79_Act5(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:75") 
	},

	async Game_Event85_Act5(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:75") 
	},

	async Menu_Event2_Act1(runtime, localVars)
	{
		const queryParams = new URLSearchParams(window.location.search)
		const token = queryParams.get('token');
		const gameId = queryParams.get('gameId');
		console.log("clicked")
					const textInstance = runtime.objects.ErrorText.getFirstInstance()
					textInstance.text = "PLEASE WAIT..."
					const button = runtime.objects.play.getFirstInstance();
					button.destroy(); 
		// Add a variable to track if the WebSocket is already connected or in the process of connecting
		let isWebSocketConnectingOrConnected = false; 
					
		try {
		    // Check if the WebSocket is already connected or in the process of connecting
		    if (!isWebSocketConnectingOrConnected) {
		        const webSocket = new WebSocket('wss://arcade.shadow.legacyarcade.com/ws', [token, gameId]);
		        runtime.globalVars.webSocket = webSocket;
		
		        webSocket.onopen = (event) => {
		            isWebSocketConnectingOrConnected = true;  // Set the flag to true when connection is established
		            runtime.callFunction('startendless');
		        };
		
		        webSocket.onclose = (event) => {
		            isWebSocketConnectingOrConnected = false; // Reset the flag when the connection is closed
		        };
		
		        webSocket.onerror = (event) => {
		            isWebSocketConnectingOrConnected = false; // Reset the flag on error
		        };
		
		        runtime.globalVars.playable = 1;
		    }
		} catch (e) {
		    const textInstance = runtime.objects.ErrorText.getFirstInstance();
		    textInstance.text = "ERROR CONNECTING";
		    console.log("error connecting to server", e);
		}
		
		
	},

	async Score_Event3_Act5(runtime, localVars)
	{
		runtime.globalVars.webSocket.close();
	},

	async Score_Event3_Act6(runtime, localVars)
	{
		window.parent.postMessage("WebSocketClosed", "*");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

