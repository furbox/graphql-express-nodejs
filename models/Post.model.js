import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    },
    authorId: {
        type: String,
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model("Post", PostSchema);
