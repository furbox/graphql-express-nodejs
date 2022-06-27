import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { hello } from "./queries.js";

const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "The Root query type",
    fields: {
        hello: hello
    }
})

export const schema = new GraphQLSchema({
    query: QueryType
});

