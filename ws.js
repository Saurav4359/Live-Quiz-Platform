const { WebSocketServer } = require("ws");
const jwt = require("jsonwebtoken");
const { jwt_key } = require("./middlewares/authMiddlewares");
const wss = new WebSocketServer({ port: 8080 });

let user = [];
// rooms = {
//   room1: {
//     roomId,
//     adminSocket,
//     students: [{socket,userId}],
//     currentQuestion,
//     liveAnswers,
//     onlineUsers
//   },
//   room2: {

//   }
// }

let rooms = {};
/*
{ 
   Quiz ID 0r RoomId: ,
   token,



}
*/
wss.on("connection", (socket) => {
  user.push(socket);
  socket.isAuth = false;
  socket.on("message", (data) => {
    const message = JSON.parse(data);

    if (message.type === "Auth") {
      const decode = jwt.verify(message.token, jwt_key);
      if (decode) {
        (socket.UserId = decode.UserId),
          (socket.role = decode.role),
          (socket.isAuth = true);
      }

      user.forEach((x) => x.send(JSON.stringify(socket)));
    }

    if (socket.isAuth) {
      if (message.type === "chat") {
        user.forEach((x) => {
          if (x === socket) {
            x.send(message.prop);
          }
        });
      }
    } else {
      socket.send("Invalid User");
    }
  });
});
