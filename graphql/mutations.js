import { GraphQLString } from "graphql";
import UserModel from "../models/User.model.js";
import { createJWT } from "../util/auth.js";

export const register = {
    type: GraphQLString,
    description: "Register a new user and return a token",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        displayName: { type: GraphQLString },
    },
    async resolve(_, args) {
        const { username, email, password, displayName } = args;
        const user = new UserModel({ username, email, password, displayName });
        await user.save();

        const token = createJWT({ _id: user._id, username: user.username, email: user.email });

        return token;
    }
}

export const login = {
    type: GraphQLString,
    description: "Login a user return a token",
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(_, args) {
        const user = await UserModel.findOne({ email: args.email }).select('+password');

        if(!user || args.password !== user.password) throw new Error("Invalid Credentials");

        const token = createJWT({ _id: user._id, username: user.username, email: user.email });

        return token;
    }
}