import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    srcURL: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    shares: String,
    messages: String,
});

//Collection inside the database
export default mongoose.model("tiktokVideos", tiktokSchema);