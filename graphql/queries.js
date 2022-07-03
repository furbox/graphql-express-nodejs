import { GraphQLID, GraphQLList } from "graphql";
import CommentModel from "../models/Comment.model.js";
import PostModel from "../models/Post.model.js";
import UserModel from "../models/User.model.js";
import { CommentType, PostType, UserType } from "./types.js";

export const users = {
    type: new GraphQLList(UserType),
    description: "return users list",
    resolve: () => UserModel.find()
}

export const user = {
    type: UserType,
    description: "return one user",
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve: (_, { id }) => UserModel.findById(id)
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
    resolve: (_, { id }) => PostModel.findById(id)
}

export const comments = {
    type: new GraphQLList(CommentType),
    description: "return all commets",
    resolve: () => CommentModel.find()
}

export const comment = {
    type: CommentType,
    description: "return one comment",
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve: (_, { id }) => CommentModel.findById(id)
}