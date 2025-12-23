import mongoose, { Schema, Document, Types } from "mongoose";
const userSchema = new Schema({
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
const classSchema = new Schema({
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
const attendenceSchema = new Schema({
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
        required: true
    },
});
export const attendance = mongoose.model("attendence", attendenceSchema);
//# sourceMappingURL=Schema.js.map