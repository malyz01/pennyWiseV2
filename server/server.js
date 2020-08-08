const IN_PROD = process.env.NODE_ENV === 'production';
!IN_PROD && require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const apollo = new ApolloServer({ typeDefs, resolvers, playground: !IN_PROD });
const server = express();

server.use(cors());
server.use(express.static(path.resolve('server', 'public')));
apollo.applyMiddleware({ app: server });

server.get('*', (_, res) => {
  res.sendFile(path.resolve('server', 'public', 'index.html'));
});

module.exports = server;
