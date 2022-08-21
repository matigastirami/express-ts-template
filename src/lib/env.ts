import { cleanEnv, str, port, host } from 'envalid';

class Env {
  private readonly env = cleanEnv(process.env, {
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'], default: 'development' }),
    PORT: port({ default: 4040 }),
    DB__HOST: host({}),
    DB__PORT: port({}),
    DB__USERNAME: str({}),
    DB__PASSWORD: str({}),
    DB__NAME: str({}),
  });

  get NODE_ENV() {
    return this.env.NODE_ENV
  }

  get PORT() {
    return this.env.NODE_ENV
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
}

export default new Env();