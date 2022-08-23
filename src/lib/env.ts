import dotenv from 'dotenv';
import { cleanEnv, str, port, host, num } from 'envalid';

const getEnvFileExtension = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return ''
    default:
      return `.${process.env.NODE_ENV}`
  }
}

dotenv.config({
  path: `.env${getEnvFileExtension()}`,
  debug: ['development'].includes(process.env.NODE_ENV ?? 'development')
});

class Env {
  private readonly env = cleanEnv(process.env, {
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'], default: 'development' }),
    PORT: port({ default: 4040 }),
    DB__TYPE: str({ choices: ['postgres', 'sqlite'], default: 'postgres' }),
    DB__HOST: host({}),
    DB__PORT: port({}),
    DB__USERNAME: str({}),
    DB__PASSWORD: str({}),
    DB__NAME: str({}),
    REDIS_HOST: host({}),
    REDIS_PORT: port({}),
    REDIS_PASSWORD: str({}),
    REDIS_URI: str({}),
    REDIS_DEFAULT_CACHE_TIME_IN_MILIS: num({ default: 5000 })
  });

  get NODE_ENV() {
    return this.env.NODE_ENV
  }

  get PORT() {
    return this.env.PORT
  }

  get DB() {
    return {
      type: this.env.DB__TYPE,
      host: this.env.DB__HOST,
      port: this.env.DB__PORT,
      username: this.env.DB__USERNAME,
      password: this.env.DB__PASSWORD,
      database: this.env.DB__NAME,
    }
  }

  get REDIS() {
    return {
      host: this.env.REDIS_HOST,
      port: this.env.REDIS_PORT,
      password: this.env.REDIS_PASSWORD,
      uri: this.env.REDIS_URI,
      cacheTime: this.env.REDIS_DEFAULT_CACHE_TIME_IN_MILIS
    };
  }
}

export default new Env();