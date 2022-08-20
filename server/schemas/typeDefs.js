const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Flights {
    _id: ID!
    name: String!
    destination: String!
    departure: String!
    price: Float!
    flightNumber: Float!
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
    Flights: [Flights]
    
    users: [User]
    user(_id: String!): User
  }



  type Mutation {
    createFlights(_id: ID!, name: String!, destination: String!, departure: String!, price: Float!, flightNumber: String!): Flights
    createUser(name: String!, email: String!, password: String!): User

    login(email: String!, password: String!) : TokenUser
  }

`;

module.exports = typeDefs;
