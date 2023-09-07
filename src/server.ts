import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Routes
import userRouter from './routes/user.routes';
import productsRouter from './routes/products.routes';



const app = express();

// Middlewares
app.use( morgan('dev') )
app.use( cors() );
app.use( express.json() )


// Routes
app.use( userRouter )
app.use( productsRouter )

export default app;
