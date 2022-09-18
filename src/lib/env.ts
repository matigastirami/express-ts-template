import dotenv from 'dotenv';
import { cleanEnv, str, port, host, num, url } from 'envalid';
import logger from './logger';

export const getEnvFileExtension = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return ''
    default:
      return `.${process.env.NODE_ENV}`
  }
}

const envFile = `.env${getEnvFileExtension()}`;

logger.info(`Env file path: ${envFile}`);

dotenv.config({
  path: envFile,
});

class Env {
  private readonly env = cleanEnv(process.env, {
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'], default: 'development' }),
    PORT: port({ default: 4040 }),
    REDIS_URI: str({}),
    REDIS_DEFAULT_CACHE_TIME_IN_MILIS: num({ default: 5000 }),
    ZIPPOPOTAM_API_URL: url(),
  });

  get NODE_ENV() {
    return this.env.NODE_ENV
  }

  get PORT() {
    return this.env.PORT
  }

  get REDIS() {
    return {
      uri: this.env.REDIS_URI,
      cacheTime: this.env.REDIS_DEFAULT_CACHE_TIME_IN_MILIS
    };
  }

  get ZIPPOPOTAM_API_URL() {
    return this.env.ZIPPOPOTAM_API_URL;
  }
}

export default new Env();