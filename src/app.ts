import express, { Express } from 'express';
import initRoutes from './controller';
import 'reflect-metadata';
import { initDbConnection } from './lib/data-source';

// import { initRedisClient } from './src/lib/redis-client';
import ws from 'ws';
const w = new ws('wss://api-pub.bitfinex.com/ws/2');

w.on('message', msg => console.log(JSON.parse(msg.toString('utf-8'))));

const msg = JSON.stringify({
  event: 'subscribe',
  channel: 'ticker',
  symbol: 'tBTCUSD',
});

w.on('open', () => w.send(msg));

const app: Express = express();
app.use(express.json());

initRoutes(app);
initDbConnection();
// initRedisClient();

export default app;
