export default function shuffleWord(word: string) {
  const letters = word.split('');

  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    const temp = letters[i];
    letters[i] = letters[j];
    letters[j] = temp;
  }

  const newWord = letters.join('');

  return newWord;
}
