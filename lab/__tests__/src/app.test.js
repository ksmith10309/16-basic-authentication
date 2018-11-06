import server, { startDB, stopDB } from '../supergoose.js';
import { app } from '../../src/app.js';
import User from '../../src/auth/model.js';

process.env.APP_SECRET = 'password';

beforeAll(startDB);
afterAll(stopDB);

describe('API TESTS', () => {
  it('should return a status code of 404 for routes that have not been registered', async () => {
    const response = await server(app).patch('/api/signup');
    expect(response.res.statusCode).toBe(404);
    expect(response.res.statusMessage).toBe('Not Found');
  });
  it('should return a status code of 404 for routes that have not been registered', async () => {
    const response = await server(app).patch('/api/signin');
    expect(response.res.statusCode).toBe(404);
    expect(response.res.statusMessage).toBe('Not Found');
  });
});

describe('API SIGN UP TESTS', () => {
  it('should return a status code of 400 if no request body has been provided or the body is invalid', async () => {
    const response = await server(app).post('/api/signup').send();
    expect(response.res.statusCode).toBe(400);
    expect(response.res.statusMessage).toBe('Bad Request');
  });
  it('should return a status code of 400 if the body is invalid', async () => {
    const userInfo = {username:'Katherine',password:'password'};
    const response = await server(app).post('/api/signup').send(userInfo);
    expect(response.res.statusCode).toBe(400);
    expect(response.res.statusMessage).toBe('Bad Request');
  });
  it('should return a status code of 200 if the request body has been provided and is valid', async () => {
    const userInfo = {username:'Katherine',email:'katherine@gmail.com',password:'password'};
    const response = await server(app).post('/api/signup').send(userInfo);
    expect(response.res.statusCode).toBe(200);
    expect(response.text.split('.').length).toBe(3);
  });
});

describe('API SIGN IN TESTS', () => {
  it('should return a status code of 401 if the user could not be authenticated', async () => {
    const response = await server(app).get('/api/signin').auth('Smith', 'badpassword');
    expect(response.res.statusCode).toBe(401);
    expect(response.res.statusMessage).toBe('Unauthorized');
  });
  it('should return a status code of 200 and respond with token for a request with a valid basic authorization header', async () => {
    await User.create({username:'Smith', email:'smith@gmail.com',password:'password'});
    const response = await server(app).get('/api/signin').auth('Smith', 'password');
    expect(response.res.statusCode).toBe(200);
    expect(response.text.split('.').length).toBe(3);
  });
});
