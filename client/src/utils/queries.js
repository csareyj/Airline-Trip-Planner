import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users {
  users {
    _id
    name
    email
    flightList{
    _id
    destination
    departure
    duration
    price
    flightNumber
    }
  }
}
`;

export const QUERY_FLIGHTS = gql`
  query flights {
    flights {
    _id
    destination
    departure
    duration
    price
    flightNumber
  }
}
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      flightList{
      _id
      destination
      departure
      duration
      price
      flightNumber
      }
    }
  }
`;