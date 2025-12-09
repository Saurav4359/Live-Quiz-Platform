const express = require("express");
const jwt = require("jsonwebtoken");
const { signup, signin } = require("./validation/zod");
const { UsersModel, Dbconnect, QuizModel, QuestionModel } = require("./Schemas/db");
const { jwt_key, middleware } = require("./middlewares/authMiddlewares");
const { ws } = require("./ws");

const app = express();
app.use(express.json());

app.post("/api/auth/signup", async (req, res) => {
  const { success, data, error } = signup.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      success,
      error: JSON.parse(error)[0].code,
      details: {
        [JSON.parse(error)[0].path]: JSON.parse(error)[0].message,
      },
    });
  }

  const existEmail = await UsersModel.findOne({
    email: data.email,
  });

  if (existEmail) {
    return res.status(400).json({
      success: false,
      error: "User with this email already exist",
      details: { email: "Already Exists" },
    });
  }
  const user = await UsersModel.create({
    name: data.name,
    email: data.email,
    password: data.password,
    role: data.role,
  });
  res.status(201).json({
    success,
    user,
  });
});
//---------------------------------------------------------
app.post("/api/auth/login", async (req, res) => {
  const { success, data } = signin.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      success,
      error: JSON.parse(error)[0].code,
      details: {
        [JSON.parse(error)[0].path]: JSON.parse(error)[0].message,
      },
    });
  }
  const user = await UsersModel.findOne({
    email: data.email,
    password: data.password,
  });
  if (user) {
    const token = jwt.sign({ userId: user._id ,role : user.role}, jwt_key);
    //const token = jwt.sign({ userId: user._id ,role : user.role}, jwt_key,{expiresIn: "1m"}); can do this for sessions
    res.status(200).json({
      success,
      data: {
        token,
      },
    });
  } else {
    res.status(400).json({
      message: "Invalid email or password",
    });
  }
});
//---------------------------------------------------------
app.get("/api/auth/me", middleware, async (req, res) => {
  const id = req.id;
  const user = await UsersModel.findOne({
    _id: id,
  });
  if (user) {
    res.status(200).json({
      success: true,
      data: user,
    });
  } else {
    res.status(401).json({
      success: false,
      error: "Unauthorized, token missing or invalid",
    });
  }
});
//---------------------------------------------------------
// for admins..
app.post("/api/quiz", middleware, async (req, res) => {
  const userId = req.id;
  const { title } = req.body;

  const user = await UsersModel.findOne({
    _id: userId,
  });
  if (!user) {
    return res.status(400).json({
      success: false,
      error: "Invalid request schema",
    });
  }
  if (user.role !== "admin") {
    return res.status(401).json({
      success: false,
      error: "Unauthorized, admin access required",
    });
  }
  try {
    const quiz = await QuizModel.create({
      title,
      questions: [],
    });

    res.status(201).json({
      success: true,
      data: quiz,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      error: "Invalid request schema",
    });
  }
});
//---------------------------------------------------------
app.post("/api/quiz/:quizId/questions", middleware, async (req, res) => {
  const quizId = req.params.quizId;
  const userId = req.id;
  const { text, options, correctOptionIndex } = req.body;
  const user = await UsersModel.findOne({
    _id: userId,
  });
  console.log(" iuvberiekbeilkbjepbljekbnjilkn");
  if (!user) {
    console.log("jv ssdjvkd kla. lskcvn");
    return res.status(400).json({
      success: false,
      error: "Invalid request schema",
    });
  }
  if (user.role !== "admin") {
    return res.status(401).json({
      success: false,
      error: "Unauthorized, admin access required",
    });
  }
  const ques = await QuestionModel.create({
    text,
    options,
    correctOptionIndex,
  });
  const quiz = await QuizModel.findOne({
    _id: quizId,
  });
  quiz.questions.push(ques);
  await quiz.save();
  res.status(201).json({
    success: true,
    data: quiz,
  });
});
//---------------------------------------------------------
app.get("/api/quiz/:quizId", middleware, async (req, res) => {
  const { quizId } = req.params;
  const userId = req.id;
  const user = await UsersModel.findOne({
    _id: userId,
  });
  if (!user) {
    return res.status(400).json({
      success: false,
      error: "Invalid request schema",
    });
  }
  if (user.role !== "admin") {
    return res.status(401).json({
      success: false,
      error: "Unauthorized, admin access required",
    });
  }

  const quiz = await QuizModel.findOne({
    _id: quizId,
  });
  console;
  if (quiz) {
    res.status(200).json(quiz);
  } else {
    res.status(400).send("Quiz not found!");
  }
});
//---------------------------------------------------------
try {
  Dbconnect();
  ws();
  app.listen(3000, () => {
    console.log("Port running on 3000");
  });
} catch (e) {
  console.log("error : " + e);
}
