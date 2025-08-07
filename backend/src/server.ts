import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import usuarioRoutes from './routes/usuarioRoutes';

dotenv.config();

export const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use("/api", usuarioRoutes)

app.get('/', (req, res) => {
  res.send('Default route;');
});
