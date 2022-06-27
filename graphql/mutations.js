import { GraphQLString } from "graphql";
import { UserModel } from "../models/User.model.js";

export const register = {
    type: GraphQLString,
    description: "Register a new user",
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        displayName: { type: GraphQLString },
    },
    resolve(_, args) {
        const { username, email, password, displayName } = args;
        console.log(args)
        return "new user created";
    }
}