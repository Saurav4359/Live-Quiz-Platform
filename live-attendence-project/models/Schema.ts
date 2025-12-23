import mongoose, { Schema, Document, Types } from "mongoose";

export interface Iuser extends Document {
  name: string;
  email: string;
  password: string;
  role: "teacher" | "student";
}
const userSchema = new Schema<Iuser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["teacher", "student"],
    required: true,
  },
});

export const users = mongoose.model("users", userSchema);

export interface Iclass extends Document {
  className: string;
  teacherId: Types.ObjectId; // reference to User
  studentIds: Types.ObjectId[]; // array of User references
}

const classSchema = new Schema<Iclass>({
  className: {
    type: String,
    required: true,
  },
  teacherId: {
    type: Types.ObjectId,
    ref: "users",
    required: true,
  },
  studentIds: {
    type: [
      {
        type: Types.ObjectId,
        ref: "users",
      },
    ],
  },
});

export const classes = mongoose.model("class", classSchema);

export interface Iattendance extends Document {
  classId: Types.ObjectId;
  studentId: Types.ObjectId;
  status: "present" | "absent";
}

const attendenceSchema = new Schema<Iattendance>({
  classId: {
    type: Types.ObjectId,
    required: true,
  },
  studentId: {
    type: Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    required :true
  },
});


export const attendance=mongoose.model("attendence",attendenceSchema);