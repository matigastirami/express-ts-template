import { queryZipCodeInfo } from './query/zip-code.query';

export type IZipCodeInfoInput = {
  countryCode: string;
  zipCode: number;
};

const resolvers = {
  Query: {
    zipCodeInfo: queryZipCodeInfo,
  },
};

export { resolvers };
