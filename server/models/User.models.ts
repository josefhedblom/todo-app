import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import isEmail from 'validator/lib/isEmail';
import isAlpha from 'validator/lib/isAlpha';

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    validate: [isAlpha, "Username can only contain letters"],
    minlength: [3, "Username must be a minumin length of 3 characters"],
    lowercase: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [isEmail, "Please enter a valid email"],
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [10, "Password must be a minimun length of 10 characters"]
  },
  missions: []
});

UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    } else {
      this.password = hash;
      next();
    }
  })
});

const User = model('user', UserSchema);
export default User;