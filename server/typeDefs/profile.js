const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    profile(id: String!): Profile
    profiles: [Profile!]!
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
