import { SECRET_TOKEN } from '../config/env.config'
import User from '../models/User.models';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const user_signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password })
    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
}

export const user_login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const authUser = await User.findOne({ email });

  if (!authUser) return res.status(401).json({
    title: 'Authentication Error',
    error: 'Invalid Credentials'
  });

  const authPassword = await bcrypt.compare(password, authUser.password);

  if (!authPassword) return res.status(401).json({
    title: 'Authentication Error',
    error: 'Invalid Credentials'
  });

  const authToken = jwt.sign({ userId: authUser._id }, SECRET_TOKEN);
  return res.status(200).json({
    title: "Login Success",
    token: authToken
  });
};

export const user_update = async (req: Request, res: Response) => { }

export const user_delete = async (req: Request, res: Response) => {
  const { userId } = req.params

  try {
    await User.deleteOne({ _id: userId });
    res.status(200).json({ message: "User has been deleted" });
  } catch (error) {
    res.status(500).json({ error: error });
  }

}