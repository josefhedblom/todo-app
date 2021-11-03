import Express from 'express';
const App = Express();
const PORT = 4000
App.use(Express.json());


import connectDB from './config/db.config';
import UserRouter from './routes/users.routes';
App.use('/users/', UserRouter);
connectDB();
App.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
