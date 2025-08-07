import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import usuarioRoutes from './routes/usuarioRoutes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';

dotenv.config();

export const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", usuarioRoutes)

app.get('/', (req, res) => {
  res.send('Default route;');
});
