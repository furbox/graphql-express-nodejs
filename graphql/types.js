import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import CommentModel from "../models/Comment.model.js";
import PostModel from "../models/Post.model.js";
import UserModel from "../models/User.model.js";

export const UserType = new GraphQLObjectType({
    name: "UserType",
    description: "The user type",
    fields: {
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        displayName: { type: GraphQLString },
        createdAt: { type: GraphQLString, },
        updatedAt: { type: GraphQLString, }
    }
});

export const PostType = new GraphQLObjectType({
    name: "PostType",
    description: "the user type",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        author: {
            type: UserType, resolve(parent) {
                return UserModel.findById(parent.authorId)
            }
        },
        createdAt: { type: GraphQLString, },
        updatedAt: { type: GraphQLString, },
        comments: { type: new GraphQLList(CommentType),
            resolve(parent){
                return CommentModel.find({postId: parent.id})
            }
         }
    }),
});

export const CommentType = new GraphQLObjectType({
    name: "CommentType",
    description: "The comment type",
    fields: {
        id: { type: GraphQLID },
        comment: { type: GraphQLString },
        user: {
            type: UserType, resolve(parent) {
                return UserModel.findById(parent.userId)
            }
        },
        post: {
            type: PostType, resolve(parent) {
                return PostModel.findById(parent.postId)
            }
        }
    }
});