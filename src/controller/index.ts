import { Express } from 'express';
import HelloController from "./user.controller";

const initRoutes = (app: Express) => {
    new HelloController(app);
}

export default initRoutes;