import { createClient } from 'redis';
import logger from './logger';
// import _ from 'lodash';
// import env from './env';

/*class CacheClient {
  private redisClient: any;

  constructor() {
    this.initRedisClient()
        .then(() => logger.info(`Successfully connected to Redis`));
  }

  private initRedisClient = async () => {
    this.redisClient = createClient({
      url: 'redis://localhost:6379'
    });

    this.redisClient.on('error', (error: { message: any; }) =>
      logger.error(`There was an error on Redis client: ${error.message}`)
    );

    await this.redisClient.connect();
  };

  public getCache = (key: string) => {
    return this.redisClient.get(key);
  };

  public setCache = (key: string, value: any) => {
    return this.redisClient.set(
        key, _.isObjectLike(value) ? JSON.stringify(value) : value
    );
  };
}*/

// export default new CacheClient();

export const initRedisClient = async () => {

  const redisClient = createClient({
    url: 'redis://redis:6379'
  });

  redisClient.on('error', (error: { message: any; }) =>
    logger.error(`There was an error on Redis client: ${error.message}`)
  );

  await redisClient.connect();

  return redisClient;
};
