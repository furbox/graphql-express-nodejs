import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema.js";
import { connectDB } from "./db/index.js";
import { authenticate } from "./middlewares/auth.js";

connectDB();

const app = express();

app.use(authenticate);

app.get('/',(req, res) => {
    res.send("Graphql API");
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000);

console.log("Run un 3000");