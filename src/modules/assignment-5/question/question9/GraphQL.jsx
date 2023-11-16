
import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
query getCountries($page: Int, $pageSize: Int) {
    countries(displayOptions: { page: $page, pageSize: $pageSize }) {
      totalCount
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
      }
    }
    currencies(after: "") {
      edges {
        cursor
        node {
          countryCodes
        }
      }
    }
    timeZone(id: "") {
      name
    }
    timeZones {
      pageInfo {
        hasPreviousPage
      }
    }
  }
`;
