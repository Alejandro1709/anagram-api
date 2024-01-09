import factorial from './factorial';

type Frequency = {
  [letter: string]: number;
};

export default function getPermutationCount(word: string) {
  let frequencyCounter: Frequency = {};
  let results = [];

  word = word.replaceAll(' ', '');

  for (let i = 0; i < word.length; i++) {
    frequencyCounter[word[i]] = frequencyCounter[word[i]]
      ? frequencyCounter[word[i]] + 1
      : 1;
  }

  for (let count of Object.values(frequencyCounter)) {
    results.push(factorial(count));
  }

  const product = results.reduce((prev, acc) => prev * acc);

  return factorial(word.length) / product;
}
