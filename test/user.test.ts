import app from '../src/app';
import request from 'supertest';
import UserService from '../src/service/user.service';

describe('/users tests', () => {
  test('GET /users/:id', async () => {
    const createdUser = await UserService.create('test', 'test@test.com');
    const {
      status,
      body: { id, name, email },
    } = await request(app).get(`/users/${createdUser.id}`);
    expect(status).toBe(200);
    expect(id).toBe(createdUser.id);
    expect(name).toBe(createdUser.name);
    expect(email).toBe(createdUser.email);
  });

  test('POST /users', async () => {
    const createUserInput = { name: 'test', email: 'test@email.com' };
    const {
      status,
      body: { id, name, email },
    } = await request(app).post(`/users`).send(createUserInput);

    expect(status).toBe(200);
    expect(id).toBeDefined();
    expect(typeof id).toBe('number');
    expect(name).toBe(createUserInput.name);
    expect(email).toBe(createUserInput.email);
  });
});
