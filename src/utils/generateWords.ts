import getPermutationCount from './permutation';
import shuffleWord from './shuffleWord';

export default async function generateWords(word: string) {
  let numberPermutations: number = getPermutationCount(word);
  const results: string[] = [];

  for (let i = 0; i < numberPermutations; i++) {
    let shuffledWord = shuffleWord(word);

    results.push(shuffledWord);
  }

  return results;
}
