import mongoose from "mongoose";

const Schema = mongoose.Schema();
const model = mongoose.model();

const UserSchema = new Schema({
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
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Provide a valid email",
        ],
    },
    displayName: {
        type: String,
        required: true
    },
}, {
    versionKey: false,
    timestamps: true
});

export const UserModel =  model("User", UserSchema);

//export const UserModel;