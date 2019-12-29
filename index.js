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

const libraries = [
  {
    name: "Ashburn public library",
    address: "somewhere in ashburn",
    inventory: () => books[0].title
  },
  {
    name: "brambleton public library",
    address: "somewhere in brambleton",
    inventory: () => books[1].title
  }
];

const typeDefs = gql`
  type Query {
    books: [Book]
    libraries: [Library]
  }
  type Book {
    title: String
    author: String
  }
  type Library {
    name: String
    address: String
    inventory: String
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    libraries: () => libraries
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Go to ${url} to run queries!`);
});
