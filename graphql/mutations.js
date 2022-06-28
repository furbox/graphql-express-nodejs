import { GraphQLString } from "graphql";
import UserModel from "../models/User.model.js";

export const register = {
    type: GraphQLString,
    description: "Register a new user",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        displayName: { type: GraphQLString },
    },
    async resolve(_, args) {
        const { username, email, password, displayName } = args;
        const newUser = await UserModel.create({ username, email, password, displayName });
        console.log(newUser);
        return "new user created";
    }
}