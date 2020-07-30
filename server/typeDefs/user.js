const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    user(id: String!): User
    users: [User!]!
  }

  extend type Mutation {
    createUser(email: String!, password: String!): User
  }

  type User {
    id: String
    email: String!
    createdAt: String
    updatedAt: String
  }
`;
