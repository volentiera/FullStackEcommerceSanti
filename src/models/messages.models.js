import mongoose from "mongoose";
const { Schema } = mongoose

const messagesSchema = new Schema({
    user: {
        type: Object,
        required: true
    },
    messages:{
        type: Array,
        required: true
    },
    timestamp:{
        type: String,
        required: true
    }
})
export default mongoose.model('messages', messagesSchema);