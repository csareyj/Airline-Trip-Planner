import { gql } from '@apollo/client';

export const CREATE_FLIGHTS = gql`
  mutation createFlights($name: String!, $departure: String!, $destination: String!, $duration: String!, $price: String!, $flightNumber: String!) {
    createFlights(name: $name, departure: $departure, duration: $duration, destination: $destination, price: $price, flightNumber: $flightNumber) {
      _id
      name
      departure
      destination
      duration
      price
      flightNumber
    }
  }
`;

export const CREATE_USER = gql`
mutation createUser($name: String!, $email: String!, $password: String!) {
  createUser(name: $name, email: $email, password: $password) {
    _id
    name
    email
  }
}
`;