import { gql } from '@apollo/client';

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_USERS = gql`
query users {
  users {
    _id
    name
    email
  }
}
`;


// export const QUERY_DEPARTURE = gql`
// query departure {

// }
// `;
// export const QUERY_DESTINATION = gql`
// query destination {

// }
// `;
// export const QUERY_PRICE = gql`
// query price {

// }
// `;
// export const QUERY_DURATION = gql`
// query duration {

export const QUERY_DEPARTURE = gql`
query departure {
  departure {
    city
    airport
  }
}
`;
export const QUERY_DESTINATION = gql`
query destination {
    destination {
      city
      airport
    }
}
`;

export const QUERY_PRICE = gql`
query price {
  price {
    price
  }

}
`;
export const QUERY_DURATION = gql`
query duration {
  duration {
    duration
  }


// }
// `;