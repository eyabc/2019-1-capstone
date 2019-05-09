module.exports = server => {
	const io = require('socket.io')(server)
	var rooms = [];

	io.on('connection', socket => {
		/** Socket Events */
		socket.on('disconnect', function () {
			io.emit('user disconnected');
		});

		socket.on('test', m => {
			console.log(m)
		})
		// join 이벤트
		socket.on('join_room', data => {
			console.log("joinroom")
			socket.join(data.room);
	
			socket.room = data.room;
			var midx = data.midx
//			socket.on('set_midx',  data => {
//				midx = data.midx
//			})
			if (rooms[socket.room] == undefined) {
					console.log('room create :'+socket.room)
				rooms[socket.room] = new Object()
				rooms[socket.room].socket_ids = new Object()
			}
			rooms[socket.room].socket_ids[midx] = socket.id
			console.log(rooms[socket.room])
			// currentRoomId = data.cgidx;
        	// data.socketId = socket.id;
        });
		/** User Exit Room */
		socket.on('exit_room', data => {
			console.log("exit")
			socket.leave(socket.room)
		});
		// message 이벤트
		socket.on('send_msg', (data) => {
			console.log(data)
			io.to(socket.room).emit('message emit', data);
		});
	});

}