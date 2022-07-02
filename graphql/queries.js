import { GraphQLID, GraphQLList } from "graphql";
import PostModel from "../models/Post.model.js";
import UserModel from "../models/User.model.js";
import { PostType, UserType } from "./types.js";

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

export const posts = {
    type: new GraphQLList(PostType),
    description: "return all posts",
    resolve: () => PostModel.find()
}

export const post = {
    type: PostType,
    description: "return one post",
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve: (_, args) => PostModel.findById(args.id)
}