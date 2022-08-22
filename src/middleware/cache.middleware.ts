/* import { NextFunction, Request, Response } from 'express';
import RedisClient from '../lib/redis-client';

const getCachedValue = (key: string): ((req: Request, res: Response, next: NextFunction) => void) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const cachedValue = await RedisClient.getCache(key);
    if (!cachedValue) {
      next();
    }

    return res
      .status(200)
      .json(JSON.parse(cachedValue ?? '{ err: "Cache error" }'));
  };
};

const setCachedValue = (key: string): ((req: Request, res: Response, next: NextFunction) => void) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const cachedValue = await RedisClient.getCache(key);

    if (!cachedValue) {
      await RedisClient.setCache(key, res.locals.cacheableValue);
    }

    return next();
  };
};

export { getCachedValue, setCachedValue };
 */