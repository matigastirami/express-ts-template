import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Place {
    placeName: String,
    longitude: String,
    latitude: String,
    state: String,
    stateAbbreviation: String
  }

  type ZipCodeInfo {
    postCode: String!,
    country: String!,
    countryAbbreviation: String!,
    places: [Place!]!
  }

  input ZipCodeInfoInput {
    countryCode: String!,
    zipCode: Int!
  }

  type Query {
    zipCodeInfo(input: ZipCodeInfoInput!): ZipCodeInfo!
  }
`;