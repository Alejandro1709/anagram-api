import express, { Request, Response } from 'express';
import getPermutationCount from './utils/permutation';
import shuffleWord from './utils/shuffleWord';
import generateWords from './utils/generateWords';

const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'Ok' });
});

// http://localhost:2024/api/v1/anagrams?q=arroz
app.get('/api/v1/anagrams', async (req: Request, res: Response) => {
  let { q } = req.query;

  const results = await generateWords(q as string);

  res.status(200).json({
    prev: null,
    next: null,
    query: q,
    total: results.length,
    results,
  });
});

app.listen(2024, () => console.log('Server is up and running on port 2024.'));
