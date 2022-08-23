import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";
import Env from './env';

const { DB: {type, host, port, username, password, database}, NODE_ENV } = Env;

console.log("DB CONF", Env.DB);

const nonTestDataSourceConf = NODE_ENV !== 'test' ? {
    host,
    port,
    username,
    password,
} : {};

const AppDataSource = new DataSource({
    type,
    database,
    synchronize: NODE_ENV !== 'production',
    logging: true,
    entities: [User],
    ...nonTestDataSourceConf
})

export const initDbConnection = () => {
    return AppDataSource.initialize();
};

export default AppDataSource;