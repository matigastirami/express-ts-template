import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "changeme",
    database: "postgres",
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