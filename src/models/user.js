import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, lowercase: true, trim: true },
    password: { type: String, select: false },
    isDeleted: { type: Boolean, default: false },
    gender: { type: String },
    phoneNumber: { type: String },
    birthdate: { type: Number },
    location: {
      street: String,
      city: String,
      state: String,
      postcode: String,
    },
    username: String,
    firstName: String,
    lastName: String,
    title: String,
    picture: String,
  },
  { timestamps: true }
);

const userModel = mongoose.model('User', UserSchema);
export default userModel;
