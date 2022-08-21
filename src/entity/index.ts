import AppDataSource from "../lib/data-source";
import { User } from "./user.entity";

const userRepository = AppDataSource.getRepository(User);

export {
    userRepository
}