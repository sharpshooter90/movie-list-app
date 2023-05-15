const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");

const movieResolvers = require("./resolvers/resolvers");
const movieSchema = require("./schema/schema");
const app = express();
const cors = require("cors");

// connect the db
mongoose
  .connect(
    "mongodb+srv://sudeepmp:06HBnGQXweaLHL11@movie-app-cluster.bg3ue6s.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDb connection established");
  })
  .catch((err) => {
    console.log("MongoDb connection error", err);
  });

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: movieSchema,
    rootValue: movieResolvers,
    graphiql: true,
  })
);
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.listen("4001", () => {
  console.log("server listening on port 4001!");
});
