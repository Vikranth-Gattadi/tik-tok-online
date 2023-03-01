import mongoose from 'mongoose'

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    desp: String,
    song: String,
    likes: Number,
    chats: Number,
    shares: Number
})
 
export default mongoose.model('videos', tiktokSchema);