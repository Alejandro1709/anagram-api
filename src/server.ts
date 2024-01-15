import express, { Request, Response } from 'express';
import generateWords from './utils/generateWords';
import { type AnagramResponse } from './types/response';

const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

app.get('/api/v1/anagrams', async (req: Request, res: Response) => {
  const q = req.query.q as string;
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 60;

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

app.listen(2024, () => console.log('Server is up and running on port 2024.'));
