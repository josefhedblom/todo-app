import Express from 'express';
const UserRouter = Express.Router()
import { signup } from '../controllers/users.controllers';

UserRouter.post('/signup', signup);

export default UserRouter

