import express from 'express';
import errMessages from '../../../constants/errorMessages.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  try {
    // const result = await userController.getAllUsers(req.user._id);
    return res
      .status(200)
      .send({ success: true, users: [{ name: 'qamar' }, { name: 'other' }] });
  } catch (err) {
    return res.status(400).send({
      success: false,
      err: err.message || errMessages.errors.GENERIC_ERROR,
    });
  }
});

export default userRouter;
