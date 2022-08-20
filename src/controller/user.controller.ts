import { Express, Request, Response } from 'express';
import UserService from '../service/user.service';

class UserController {

    constructor(app: Express) {
        app.get('/users/:id', this.findById.bind(this));
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;

        // TODO: add class-validator to check inputs
        if(!id) {
            return res.status(400).json({ err: 'Missing id' });
        }

        const user = await UserService.findById(Number(id));

        return user;
    }
}

export default UserController;