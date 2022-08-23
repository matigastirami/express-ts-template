import migrateDb from "./test/helper/migrate-db";
import CacheClient from './src/lib/redis-client';

// jest.mock("redis", () => jest.requireActual("redis-mock"));

beforeAll(async () => {
    await migrateDb();
});

// Avoid Jest to have open handles after executing
afterAll(async () => {
    await CacheClient.closeConnection();
})