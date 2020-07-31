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
    id: ID
    email: String!
    profile: Profile
    createdAt: String
    updatedAt: String
  }

  type Profile {
    id: ID
    userId: ID
    fullName: String
    avatar: String
    createdAt: String
    updatedAt: String
  }
`;
