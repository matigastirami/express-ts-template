import { Express, Request, Response } from 'express';
import logger from '../lib/logger';
// import { getCachedValue, setCachedValue } from '../middleware/cache.middleware';
import UserService from '../service/user.service';

class UserController {

    constructor(app: Express) {
        app.get(
            '/users/:id', 
            this.findById.bind(this),
        );

        app.post(
            '/users',
            this.create.bind(this)
        );
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;

        // TODO: add class-validator to check inputs
        if(!id) {
            return res.status(400).json({ err: 'Missing id' });
        }

        const user = await UserService.findById(Number(id));

        if(!user) {
            logger.error(`User ${id} not found`);
            return res.status(404).end();    
        }

        logger.error(`User ${id} found`);
        return res.status(200).send(user);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async create(req: Request, res: Response) {

        const { name, email } = req.body;

        if(!name || !email) {
            return res.status(400).send({ err: 'Both name and email are mandatory' });
        }

        const user = await UserService.create(name, email);

        res.status(200).send(user);
    }
}

export default UserController;