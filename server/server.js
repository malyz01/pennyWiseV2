require('dotenv').config();
const path = require('path');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
];

const resolvers = {
  Query: {
    books: () => books
  }
};

const apollo = new ApolloServer({ typeDefs, resolvers });

const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(express.static(path.resolve('server', 'public')));

apollo.applyMiddleware({ app: server });

module.exports = server;
