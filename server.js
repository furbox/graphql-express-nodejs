import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema.js";
import { connectDB } from "./db/index.js";

connectDB();

const app = express();

app.get('/',(req, res) => {
    res.send("Graphql API");
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000);

console.log("Run un 3000");