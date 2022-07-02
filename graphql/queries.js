import { GraphQLID, GraphQLList } from "graphql";
import UserModel from "../models/User.model.js";
import { UserType } from "./types.js";

export const users = {
    type: new GraphQLList(UserType),
    description: "return users list",
    resolve() {
        return UserModel.find();
    }
}

export const user = {
    type: UserType,
    description: "return one user",
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve(_, args) {
        return UserModel.findById(args.id);
    }
}