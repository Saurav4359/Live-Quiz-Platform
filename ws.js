function ws() {
  const { WebSocketServer } = require("ws");
  const jwt = require("jsonwebtoken");
  const { jwt_key } = require("./middlewares/authMiddlewares");
  const { QuizModel } = require("./Schemas/db");
  const url = require("url");

  const wss = new WebSocketServer({ port: 8080 });
  console.log(" step1");
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
    try {
      const decode = jwt.verify(message.token, jwt_key);
      socket.UserId = decode.UserId;
      socket.role = decode.role;
      socket.isAuth = true;
      socket.send("Authenticated");

      //user.forEach((x) => x.send(JSON.stringify(socket)));
    } catch (e) {
      socket.send("Invalid Token");
      socket.close();
    }
    user.push(socket);
    socket.isAuth = false;
    console.log("step2");
    //---------------------------------------------
    socket.on("message", async (data) => {
      const message = JSON.parse(data);
      console.log("step3");

      if (socket.isAuth) {
        console.log("step4");
        if (message.type === "chat") {
          user.forEach((x) => {
            if (x === socket) {
              x.send(message.prop);
            }
          });
        }

        /*
      { "type" :  "join-quiz",
        "QuizId": "87otygkh"
      }
      */
        if (message.type === "join-quiz") {
          console.log("step5");
          if (socket.role === "admin") {
            console.log("step6");
            const quiz = await QuizModel.findOne({
              _id: message.QuizId,
            });
            if (quiz) console.log("step7");
            console.log(quiz);
            user.forEach((x) => {
              if (x === socket) {
                x.send(JSON.stringify(quiz));
              }
            });
          }
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
