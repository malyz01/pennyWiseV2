const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    users: [User]
  }

  extend type User {
    id: String
    email: String
    password: String
    createdAt: String
    updatedAt: String
  }

  extend type Mutation {

  }
`;
