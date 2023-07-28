
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

	async Game_Event78_Act5(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:75") 
	},

	async Menu_Event2_Act1(runtime, localVars)
	{
		const queryParams = new URLSearchParams(window.location.search)
		const token = queryParams.get('token');
		const gameId = queryParams.get('gameId');
		
		try{
			const webSocket = new WebSocket('wss://arcade.stage.legacyarcade.com/ws', [token,gameId]);
			runtime.globalVars.webSocket = webSocket;
			webSocket.onopen = (event) =>{
				runtime.callFunction('startendless');
			};
		}catch(e){
			const textInstance = runtime.objects.ErrorText.getFirstInstance()
			textInstance.text = "ERROR CONNECTING"
			console.log("error connecting to server", e)
		}
		
	},

	async Score_Event3_Act5(runtime, localVars)
	{
		runtime.globalVars.webSocket.close();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

