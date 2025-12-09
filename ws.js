function ws() {
  const { WebSocketServer } = require("ws");
  const jwt = require("jsonwebtoken");
  const { jwt_key } = require("./middlewares/authMiddlewares");
  const { QuizModel } = require("./Schemas/db");
  const url = require("url");

  const wss = new WebSocketServer({ port: 8080 });
  console.log(" step1");
  let user = [];
  let userSocket = [];
  let adminSocket = [];
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

  let quizRooms = {};
  /*
{ 
   Quiz ID 0r RoomId: ,
   token,



}
*/
  wss.on("connection", (socket, req) => {
    const { query } = url.parse(req.url, true); // it converts raw string to json
    /*
    {
  pathname: "/",
  query: {
    token: "ABC"
  }
}
    */
    const token = query.token;
    const quizId = query.quizId;
    const type = query.type;
    console.log(type);

    try {
      const decode = jwt.verify(token, jwt_key);
      socket.UserId = decode.UserId;
      socket.role = decode.role;
      socket.isAuth = true;
      socket.send("Authenticated");
      // for session out , can you this method
      // setTimeout(() => {
      //   socket.send("Server Time Out").close(1008,"Server timeout");
      // }, 1000*60);

      //user.forEach((x) => x.send(JSON.stringify(socket)));
    } catch (e) {
      socket.send("Invalid Token");
      socket.close(1008, "Invalid token");
    }

    if (socket.role === "student") {
      userSocket.push(socket);
    } else if (socket.role === "admin") {
      adminSocket.push(socket);
    } else {
      socket.send("Invalid connection").close(1006, "Invalid connection");
    }

    //console.log("step2");
    //---------------------------------------------
    socket.on("message", async (data) => {
      const message = JSON.parse(data);
      console.log("step3");

      if (message.type === "join-quiz") {
        console.log("step5");
        if (socket.role === "admin") {
          console.log("step6");
          const quiz = await QuizModel.findOne({
            _id: quizId,
          });
          if (quiz) console.log("step7");
          console.log(quiz);
          userSocket.forEach((x) => {
              {
              x.send(JSON.stringify(quiz));
            }
          });
        }
      } else {
        socket.send("Invalid User");
      }
    });
  });
}
//ws();

module.exports = {
  ws,
};
