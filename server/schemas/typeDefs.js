const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Departure {
    _id: ID!
    name: String!
    departure: String!
  }

  type Destination {
    _id: ID!
    name: String!
    destination: String!
  }

  type Duration {
    _id: ID!
    name: String!
    duration: Int!
  }

  type Price {
    _id: ID!
    name: String!
    price: Float!
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
    Departure: [Departure]
    Destination: [Destination]
    Duration: [Duration]
    Price: [Price]
    users: [User]
    user(_id: String!): User
  }



  type Mutation {
    createDeparture(_id: ID!, name: String!, departure: String!): Departure
    createDestination(_id: ID!, name: String!, destination: String!): Destination
    createDuration(_id: ID!, name: String!, duration: Int!): Duration
    createPrice(_id: ID!, name: String!, Price: Float!): Price 
    createUser(name: String!, email: String!, password: String!): User

    login(email: String!, password: String!) : TokenUser
  }

`;

module.exports = typeDefs;
