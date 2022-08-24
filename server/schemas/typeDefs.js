const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Flights {
    _id: ID!
    destination: String!
    departure: String!
    duration: String!
    price: String!
    flightNumber: String!
  }

  type User {
    _id: ID!
    name: String!
    email: String!
    flightList: [Flights]
    # no password field, need to keep passwords hidden
  }
    type TokenUser {
    token: String
    user: User
  }

  type Query {
    flights: [Flights]
    me: User
    users: [User]
    user(_id: String!): User
  }


  type Mutation {
    createFlights(_id: ID!, destination: String!, departure: String!, price: String!, flightNumber: String!): Flights
    createUser(name: String!, email: String!, password: String!): TokenUser

    #TODO: create booking, cancel booking

    login(email: String!, password: String!) : TokenUser
  }

`;

module.exports = typeDefs;
