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
    autorId: {
        type: String,
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model("Post", PostSchema);
