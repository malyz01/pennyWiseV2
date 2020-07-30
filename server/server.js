require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { ApolloServer } = require('apollo-server-express');

const IN_PROD = process.env.NODE_ENV === 'production';

const apollo = new ApolloServer({ typeDefs, resolvers, playground: !IN_PROD });
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve('server', 'public')));

apollo.applyMiddleware({ app: server });

module.exports = server;
