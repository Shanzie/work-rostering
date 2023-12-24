const request = require('supertest');
const app = require('../app');

describe('Authentication Endpoints', () => {
  it('should login a user and return a token', async () => {
    const res = await request(app)
      .post('/api/auth')
      .send({
        email: 'test@example.com',
        password: 'password'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should not login with incorrect credentials', async () => {
    const res = await request(app)
      .post('/api/auth')
      .send({
        email: 'test@example.com',
        password: 'wrongpassword'
      });
    expect(res.statusCode).toEqual(401);
  });

});
