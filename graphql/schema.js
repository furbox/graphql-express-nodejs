import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { users, user, posts, post, comments, comment } from "./queries.js";
import { register, login, createPost, updatedPost, deletedPost, addComment, updatedComment, deletedComment } from "./mutations.js";

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The Root query type",
    fields: {
        users, 
        user, 
        posts,
        post,
        comments,
        comment
    }
});

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "The Root mutation type",
    fields: {
        register,
        login,
        createPost,
        updatedPost,
        deletedPost,
        addComment,
        updatedComment,
        deletedComment
    }
});

export const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});

