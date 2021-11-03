import User from '../models/User.models';
import { Request, Response } from 'express';

export const user_signup = async (req: Request, res: Response) => {
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