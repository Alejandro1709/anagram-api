import getPermutationCount from './permutation';
import shuffleWord from './shuffleWord';
import axios, { AxiosError, type AxiosResponse } from 'axios';
import type { DefinitionFound, DefinitionNotFound } from '../types/definition';

export default async function generateWords(word: string) {
  const results: string[] = [];

  let numberPermutations = getPermutationCount(word);

  for (let i = 0; i < numberPermutations; i++) {
    let shuffledWord = shuffleWord(word);

    results.push(shuffledWord);
    // try {
    //   if (!(await validateWord(shuffledWord))) {
    //     if (results.includes(shuffledWord)) continue;
    //     results.push(shuffledWord);
    //   }
    // } catch (error) {
    //   if (error instanceof AxiosError) {
    //     console.log(error.message);
    //   }
    // }
  }

  return results;
}

async function validateWord(word: string): Promise<Boolean> {
  const res = await axios.get<
    AxiosResponse<DefinitionFound[], DefinitionNotFound>
  >(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

  return res.status === 404;
}
