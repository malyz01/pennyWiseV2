require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const server = express();

// SAMPLE GRAPHQL
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

// The resolvers
const resolvers = {
  Query: { books: () => books }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(express.static(path.resolve('server', 'public')));

console.log(typeof graphqlExpress);
server.use('/graphql', graphqlExpress({ schema }));
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

module.exports = server;
