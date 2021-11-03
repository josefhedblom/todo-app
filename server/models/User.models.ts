import { model, Schema } from "mongoose";

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

const User = model('user', UserSchema);
export default User;