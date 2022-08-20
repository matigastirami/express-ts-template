import express, { Express } from 'express';
import dotenv from 'dotenv';
import initRoutes from './src/controller';
import logger from './src/lib/logger';
import env from './src/lib/env';
import "reflect-metadata";
import initDbConnection from './src/lib/data-source';

dotenv.config();

const app: Express = express();
const port = env.PORT;

initRoutes(app);
initDbConnection();

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});