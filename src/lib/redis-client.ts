import { createClient } from 'redis';
import logger from './logger';
import _ from 'lodash';
import env from './env';

class CacheClient {
  private redisClient: any;

  constructor() {
    this.initRedisClient()
        .then(() => logger.info(`Cache module init`));
  }

  private initRedisClient = async () => {
    this.redisClient = createClient({
      url: env.REDIS.uri,
      socket: {
        timeout: 5000,
        tls: false
      },
    });

    this.redisClient.on('error', (error: { message: any; }) =>
      logger.error(`There was an error on Redis client: ${error.message}`)
    );

    this.redisClient.on('connect', () => logger.info('Sucessfully Connected to redis'))

    return this.redisClient.connect();
  };

  public getCache = (key: string) => {
    return this.redisClient.get(key);
  };

  public setCache = (key: string, value: any) => {
    console.log(value);
    return this.redisClient.set(
        key, 
        _.isObjectLike(value) ? JSON.stringify(value) : value,
        {
          PX: env.REDIS.cacheTime
        }
    );
  };
}

export default new CacheClient();