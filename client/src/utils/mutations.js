import { gql } from '@apollo/client';

export const CREATE_DEPARTURE = gql`
  mutation createDeparture($name: String!, $departure: String!) {
    createDeparture(name: $name, departure: $departure) {
      _id
      name
      departure
    }
  }
`;

export const CREATE_DESTINATION = gql`
  mutation createDestination($name: String!, $destination: String!) {
    createDestination(name1: $tech1, name: $destination) {
      _id
      name
      destination
    }
  }
`;
export const CREATE_DURATION = gql`
  mutation createDuration($name1: String!, $duration: Int!) {
    createDuration(name: $name, duration: $duration) {
      _id
      name
      duration
    }
  }
`;
export const CREATE_PRICE = gql`
  mutation createPrice($name1: String!, $price: Float!) {
    createPrice(name: $name, price: $price) {
      _id
      name
      price
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
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user{
      _id
      name
      email
    }
  }
}
`;
