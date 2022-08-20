import { userRepository } from "../entity";
import { User } from "../entity/user.entity";

export default class UserService {
    static async findAll(): Promise<User[]> {
        return userRepository.find();
    }

    static async findById(id: number): Promise<User | null> {
        return userRepository.findOneBy({ id })
    }

    static async create(name: string, email: string): Promise<User> {
        const user = new User();
        user.name = name;
        user.email = email;

        return userRepository.save(user)
    }

    static async update(id: number, name: string, email: string): Promise<User> {
        const found = await userRepository.findOneBy({ id });

        if(!found) {
            // TODO: Convert to ServiceError by extending error class
            throw new Error(`User ${id} does not exist`);
        }

        found.name = name;
        found.email = email;

        return userRepository.save(found);
    }

    static async delete(id: number) {
        const found = await userRepository.findOneBy({ id });

        if(!found) {
            // TODO: Convert to ServiceError by extending error class
            throw new Error(`User ${id} does not exist`);
        }

        return userRepository.remove(found);
    }
}