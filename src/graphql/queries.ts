import { gql } from '@apollo/client';

export const GET_CONTENT_CARDS = gql`
  query GetContentCards($keywords: String!) {
    contentCards(filter: { limit: 20, keywords: $keywords, types: [PODCAST] }) {
      edges {
        ... on Podcast {
          name
          image {
            ...Image
          }
          categories {
            ...Category
          }
          participants {
            ...Participant
          }
          length
        }
      }
    }
  }

  fragment Image on Image {
    uri
  }

  fragment Category on Category {
    name
  }

  fragment Participant on User {
    firstName
    lastName
    company
  }
`;
