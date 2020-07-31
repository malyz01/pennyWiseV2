const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    user(id: String!): User
    users: [User!]!
  }

  extend type Mutation {
    createUser(userInput: UserInput!): User
  }

  input UserInput {
    email: String!
    password: String!
  }

  type User {
    id: ID
    email: String!
    profile: Profile
    createdAt: String
    updatedAt: String
  }
`;
