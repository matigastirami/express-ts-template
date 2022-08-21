import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";
import Env from './env';

const { host, port, username, password, database } = Env.DB;

const AppDataSource = new DataSource({
    type: 'postgres',
    host,
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
})

export const initDbConnection = () => {
    return AppDataSource.initialize();
};

export default AppDataSource;