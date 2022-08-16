const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type FlightInfo {
    _id: ID!
    name: String!
    price: Float!
    departure: String!
    destination: String!
    duration: Int!
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    # no password field, need to keep passwords hidden
  }
  
  type TokenUser {
    token: String
    user: User
  }

  type Query {
    FlightInfo: [FlightInfo]
    matchups(_id: String): [Matchup]

    users: [User]
    user(_id: String!): User
  }



  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
    createUser(name: String!, email: String!, password: String!): User

    login(email: String!, password: String!) : TokenUser
  }

`;

module.exports = typeDefs;
