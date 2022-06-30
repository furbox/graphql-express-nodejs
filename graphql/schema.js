import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { users } from "./queries.js";
import { register, login } from "./mutations.js";

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The Root query type",
    fields: {
        users
    }
});

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "The Root mutation type",
    fields: {
        register,
        login
    }
});

export const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});

