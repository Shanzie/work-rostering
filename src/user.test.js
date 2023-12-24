const request = require('supertest');
const app = require('App');

describe('User Endpoints', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('userId');
  });

  it('should not create a user with an existing email', async () => {
    // Assuming you have validation to prevent duplicate emails
    const res = await request(app)
      .post('/api/users')
      .send({
        name: 'Test User',
        email: 'existing@example.com',
        password: 'password'
      });
    expect(res.statusCode).toEqual(400);
  });

});
