import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { hello } from "./queries.js";
import { register } from "./mutations.js";

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The Root query type",
    fields: {
        hello: hello
    }
});

const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "The Root mutation type",
    fields: {
        register
    }
});

export const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
});

