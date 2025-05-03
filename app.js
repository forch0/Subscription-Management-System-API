import express from 'express';
import {PORT} from './config/env.js';


import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.router.js';
import subscriptionRouter from './routes/subscription.routes.js';


const app = express();
// All routers
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

export default app;