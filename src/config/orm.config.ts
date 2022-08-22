import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../entity/user.entity";
import Env from '../lib/env';

const { port, username, password, database } = Env.DB;

const baseConfig: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port,
    username,
    password,
    database,
    synchronize: false,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [
        'migrations/*.ts'
    ],
};

export default new DataSource({
    ...baseConfig,
});