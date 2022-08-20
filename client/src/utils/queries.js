import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users {
  users {
    _id
    name
    email
  }
}
`;

export const QUERY_DEPARTURE = gql`
query departure {

}
`;
export const QUERY_DESTINATION = gql`
query destination {

}
`;
export const QUERY_PRICE = gql`
query price {

}
`;
export const QUERY_DURATION = gql`
query duration {

}
`;