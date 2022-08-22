import express, { Express } from 'express';
import initRoutes from './src/controller';
import logger from './src/lib/logger';
import Env from './src/lib/env';
import "reflect-metadata";
import { initDbConnection } from './src/lib/data-source';
// import { initRedisClient } from './src/lib/redis-client';

const app: Express = express();
const port = Env.PORT;

initRoutes(app);
initDbConnection();
// initRedisClient();

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});