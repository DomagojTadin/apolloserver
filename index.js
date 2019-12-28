const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const { gql } = require("apollo-server-express");

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
