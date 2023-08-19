import express, { Express, Request, Response } from 'express';

const PORT: string = '8080';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log('server started');
});
