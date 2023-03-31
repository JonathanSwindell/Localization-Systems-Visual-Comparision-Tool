const WebSocket = require('ws')
const wss = new WebSocket.Server({port:8080}); 

wss.on('connection',function connection(ws) {
	console.log('Client connected');

	// Send a message to the client every second
	const interval = setInterval(function() {
		const coordinates = {
			lat: Math.random() * 180 - 90,
			lng: Math.random() * 360 - 180, 
		};
		ws.send(JSON.stringify(coordinates));
	}, 1000); 
	

	ws.on('close',function close() {
		console.log('Client disconnected');
		clearInterval(interval);
	});
});
