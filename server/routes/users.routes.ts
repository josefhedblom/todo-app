import Express from 'express';
const UserRouter = Express.Router()
import { user_signup, user_delete } from '../controllers/users.controllers';

UserRouter.post('/signup', user_signup);
UserRouter.delete('/:userId', user_delete);

export default UserRouter

