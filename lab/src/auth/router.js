import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';
import badRequest from '../middleware/400.js';
import unauthorized from '../middleware/401.js';

authRouter.post('/api/signup', (req, res, next) => {
  User.create(req.body)
    .then((user) => res.send(user.generateToken()))
    .catch(err => badRequest(err, req, res, next));
});

authRouter.get('/api/signin', auth, (req, res, next) => {
  try {
    res.send(req.token);
  }
  catch (err) {
    unauthorized(err, req, res, next);
  }
});

export default authRouter;
