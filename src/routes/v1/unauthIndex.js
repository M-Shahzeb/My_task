import express from 'express';
import userController from '../../controllers/userController.js';
import { errors } from '../../constants/errorMessages.js';

const unAuthV2Router = express.Router();
unAuthV2Router.post('/', (req, res) => {
  res.status(200).send({ success: true, message: 'hello' });
});

unAuthV2Router.post('/register', async (req, res) => {
  try {
    const result = await userController.registerUser(req.body);
    return res.status(200).send({ success: true, user: result });
  } catch (err) {
    return res.status(400).send({
      success: false,
      err: err.message || errors.GENERIC_ERROR,
    });
  }
});

export default unAuthV2Router;
