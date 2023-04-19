import mongoose from "mongoose";

const Users = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "member"
    }
})
export default mongoose.model("User", Users)