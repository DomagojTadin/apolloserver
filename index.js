//const express = require("express");
//const bodyParser = require("body-parser");
const { ApolloServer, gql } = require("apollo-server");
//const { makeExecutableSchema } = require("graphql-tools");

const books = [
  {
    title: "some title 1",
    author: "some author 1"
  },
  {
    title: "some title 2",
    author: "some author 2"
  }
];

const typeDefs = gql`
  type Query {
    books: [Book]
  }
  type Book {
    title: String
    author: String
  }
`;

const resolvers = {
  Query: {
    books: () => books
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

//const server = express();

server.listen().then(({ url }) => {
  console.log(`Go to ${url} to run queries!`);
});
