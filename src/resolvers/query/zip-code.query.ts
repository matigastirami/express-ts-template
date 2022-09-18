import logger from '../../lib/logger';
import ZipCodeService from '../../service/zipcode.service';
import { ApolloError, UserInputError } from 'apollo-server-express';
import { camelize } from '../../util/object.util';

const handleApiError = (statusCode: number, message: string) => {
  switch (statusCode) {
    case 400:
    case 404:
      throw new UserInputError(message);
    default:
      throw new ApolloError(message);
  }
};

export async function queryZipCodeInfo(parent: any, args: any) {
  const { countryCode, zipCode } = args.input;
  const zipCodeService = new ZipCodeService();

  try {
    const { data } = await zipCodeService.getZipCodeInfo(countryCode, zipCode);

    const parsed = camelize(data);

    return parsed;
  } catch (error: any) {
    logger.error(
      `There was an error fetching zipCodeInfo from API: ${error.message}`
    );

    const { 
        status = 500, 
        statusText = 'INTERNAL_SERVER_ERROR' 
    } = error.response;

    handleApiError(status, statusText);
  }
}
