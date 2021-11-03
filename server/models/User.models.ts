import { model, Schema } from "mongoose";
import bcrypt = require("bcrypt");

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 10
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