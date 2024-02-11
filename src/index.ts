const data = "apple banana orange apple";
const countWord = (value: string) => {
  const trimValue = value.trim();

  const words: Record<string, any> = {};

  let word = "";

  for (let i = 0; i < trimValue.trim().length; i++) {
    const isSpace = trimValue[i] === String.fromCharCode(32);

    if (!isSpace) {
      word += trimValue[i];
    }

    if (words[word]) {
      words[word] = words[word] + 1;

      console.log(123);
      continue;
    }

    if (trimValue[i + 1] === String.fromCharCode(32) || !trimValue[i + 1]) {
      words[word] = 1;
      word = "";
    }
  }
  return words;
};

console.log(countWord(data));
