import express from 'express';
import userController from '../../../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
  try {
    const result = await userController.registerUser(req.user._id, req.body);
    return res.status(200).send({ success: true, user: result });
  } catch (err) {
    return res.status(400).send({
      success: false,
      err: err.message || errMessages.errors.GENERIC_ERROR,
    });
  }
});

export default userRouter;
