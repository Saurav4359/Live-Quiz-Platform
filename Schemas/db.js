const mongoose = require("mongoose");
const { MongoUrl } = require("../config/config");
 

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "student"],
  },
});
const QuestionSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  options: {
    type: [String],
  },
  correctOptionIndex: {
    type: Number,
  },
});
const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  questions: [QuestionSchema],
});

const UsersModel = mongoose.model("Users", UserSchema);
const QuestionModel = mongoose.model("questions", QuestionSchema);
const QuizModel = mongoose.model("Quiz", QuizSchema);

async function Dbconnect() {
  await mongoose.connect(MongoUrl);
  console.log("Db connected");
}
module.exports = {
  UsersModel,
  QuestionModel,
  QuizModel,
  Dbconnect,
};
