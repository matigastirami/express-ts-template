import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../entity/user.entity";
import Env from '../lib/env';

const { DB: {type, host, port, username, password, database}, NODE_ENV } = Env;

const nonTestDataSourceConf = NODE_ENV !== 'test' ? {
    host,
    port,
    username,
    password,
} : {};

const baseConfig: DataSourceOptions = {
    type,
    database,
    synchronize: false,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [
        'migrations/*.ts'
    ],
    ...nonTestDataSourceConf
};

export default new DataSource({
    ...baseConfig,
});