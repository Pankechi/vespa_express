import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.get('/login', (req: Request, res: Response) => {
  if (req.body.login === 'test' && req.body.password === '123') {
    res.send('welocome');
  } else {
    res.send('wrong login info');
  }
});

app.listen(process.env.Port, () => {
  console.log('server started');
});
