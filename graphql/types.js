import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
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
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        author: { type: UserType, resolve(parent){
            return UserModel.findById(parent.authorId)
        } }
    }
});