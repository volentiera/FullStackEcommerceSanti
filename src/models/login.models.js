import mongoose from "mongoose";
const { Schema } = mongoose

const loginSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar:{
        type: String,
        required: true
    }
})
export default mongoose.model('login', loginSchema);