const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    users: [User]
  }

  extend type Mutation {

  }

  type User {
    id: String
    email: String
    password: String
    createdAt: String
    updatedAt: String
  }
`;
