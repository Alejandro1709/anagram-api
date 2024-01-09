import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

app.listen(2024, () => console.log('Server is up and running on port 2024.'));
