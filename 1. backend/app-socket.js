module.exports = server => {
	const io = require('socket.io')(server)

	io.on('connection', socket => {

		let currentRoomId = null;
		var instanceId = socket.id;

		/** Socket Events */
		socket.on('disconnect', function () {
			io.emit('user disconnected');
		});

		socket.on('test', m => {
			console.log(m)
		})
		// join 이벤트
		socket.on('join', data => {
			currentRoomId = data.cgidx;
			console.log("join")
			socket.join(data);
        	//data.socketId = socket.id;
        });
		/** User Exit Room */
		socket.on('exit', data => {
			currentRoomId = null;
			socket.leave(data.cgidx)

		});
		// message 이벤트
		socket.on('newMessage', function(data){
			console.log(data)
			io.sockets.in(data.cgidx).emit('message emit', data);
		});
	});

}