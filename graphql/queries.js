import { GraphQLString } from "graphql";

export const hello = {
    type: GraphQLString,
    description: "return a string",
    resolve: () => 'Hello World'
}