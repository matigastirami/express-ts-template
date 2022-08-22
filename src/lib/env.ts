import dotenv from 'dotenv';
import { cleanEnv, str, port, host } from 'envalid';
dotenv.config();
class Env {
  private readonly env = cleanEnv(process.env, {
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'], default: 'development' }),
    PORT: port({ default: 4040 }),
    DB__HOST: host({}),
    DB__PORT: port({}),
    DB__USERNAME: str({}),
    DB__PASSWORD: str({}),
    DB__NAME: str({}),
    REDIS_HOST: host({}),
    REDIS_PORT: port({}),
    REDIS_PASSWORD: str({})
  });

  get NODE_ENV() {
    return this.env.NODE_ENV
  }

  get PORT() {
    return this.env.PORT
  }

  get DB() {
    return {
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
    };
  }
}

export default new Env();