import User from '../models/User.models';
import { Request, Response } from 'express';

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password
    })
    res.status(200).json({ message: "New User", user: user });
  } catch (error) {
    res.status(500).json({ error: error })
  }
}