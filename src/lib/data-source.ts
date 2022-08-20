import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: false,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})

const initDbConnection = () => {
    return AppDataSource.initialize();
};

export default initDbConnection;