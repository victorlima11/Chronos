import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Default route;');
});
