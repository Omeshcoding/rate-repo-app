import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
      edges {
        node {
          fullName
          description
          language
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
        }
      }
    }
  }
`;

export const SIGN_IN = gql`
  mutation Authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const SIGN_OUT = gql`
  query Sign_out($id: id, $username: username) {
    me {
      id
      username
    }
  }
`;
