import { GraphQLID, GraphQLString } from "graphql";
import CommentModel from "../models/Comment.model.js";
import PostModel from "../models/Post.model.js";
import UserModel from "../models/User.model.js";
import { createJWT } from "../util/auth_jwt.js";
import { CommentType, PostType } from "./types.js";

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

        if (!user || args.password !== user.password) throw new Error("Invalid Credentials");

        const token = createJWT({ _id: user._id, username: user.username, email: user.email });

        return token;
    }
}

export const createPost = {
    type: PostType,
    description: "Create a new post",
    args: {
        title: { type: GraphQLString },
        body: { type: GraphQLString }
    },
    async resolve(_, args, { verifiedUser }) {
        const post = new PostModel({ authorId: verifiedUser._id, title: args.title, body: args.body });
        await post.save();

        return post;
    }
}

export const updatedPost = {
    type: PostType,
    description: "update post",
    args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
    },
    async resolve(_, { id, title, body }, { verifiedUser }) {
        if (!verifiedUser) throw new Error("Unauthorized");

        const post = await PostModel.findByIdAndUpdate(
            { _id: id, authorId: verifiedUser._id },
            { title, body },
            { new: true }
        );
        return post;
    }
}

export const deletedPost = {
    type: GraphQLString,
    description: "delete a post",
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_, { id }, { verifiedUser }) {
        if (!verifiedUser) throw new Error("Unauthorized");
        const deletedPost = await PostModel.findOneAndDelete({ _id: id, authorId: verifiedUser._id });
        if (!deletedPost) throw new Error("Post not found");
        return "The post deleted";
    }
}

export const addComment = {
    type: CommentType,
    description: "new Comment",
    args: {
        postId: { type: GraphQLID },
        comment: { type: GraphQLString }
    },
    async resolve(_, { postId, comment }, { verifiedUser }) {
        if (!verifiedUser) throw new Error("Unauthorized");
        const com = await CommentModel({ comment, postId, userId: verifiedUser._id });
        if (!com) throw new Error("Comment not found");
        return com.save();
    }
}