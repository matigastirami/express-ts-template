import express, { Express } from 'express';
import initRoutes from './controller';
import "reflect-metadata";
import { initDbConnection } from './lib/data-source';
// import { initRedisClient } from './src/lib/redis-client';

const app: Express = express();
app.use(express.json());

initRoutes(app);
initDbConnection();
// initRedisClient();

export default app;