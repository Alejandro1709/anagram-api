import express, { Request, Response } from 'express';
import generateWords from './utils/generateWords';
import morgan from 'morgan';
import cors from 'cors';
import { type AnagramResponse } from './types/response';
import { ENV, PORT } from './config/secrets';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

app.get('/api/v1/anagrams', async (req: Request, res: Response) => {
  const q = req.query.q as string;
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 60;

  if (q === undefined)
    return res.status(400).json({ message: 'Invalid query' });

  const results = await generateWords(q as string);

  const result: AnagramResponse = {};

  const startIdx = (page - 1) * limit;
  const endIdx = page * limit;

  if (endIdx < results.length) {
    result.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIdx > 0) {
    result.prev = {
      page: page - 1,
      limit,
    };
  }

  result.results = results.slice(startIdx, endIdx);

  result.total = results.length;

  res.status(200).json(result);
});

app.listen(PORT, () =>
  console.log(`Server is up and running on port ${PORT}.`)
);
