function initSocket(io) {
  let chat = io.of('/chat');

  chat.on('connection', (socket) => {
    console.log('A new user has connected to chat...');

    socket.on('message', (data) => {
      console.log(`New message: ${data.message}`);
    });

  });
};

module.exports = initSocket;
