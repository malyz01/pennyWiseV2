const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    id: String
    email: String
    password: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    users: [User]
  }
`;
