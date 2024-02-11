const vowels = new Set();
vowels.add("e");
vowels.add("a");
vowels.add("i");
vowels.add("o");
vowels.add("u");

function halvesAreAlike(s: string): boolean {
  const left = s.slice(0, s.length / 2).toLowerCase();
  const right = s.slice(s.length / 2, s.length).toLowerCase();
  let leftcount = 0;
  let rightcount = 0;

  for (let i = 0; i < left.length; i++) {
    if (vowels.has(left[i])) {
      leftcount += 1;
    }
  }

  for (let k = 0; k < right.length; k++) {
    if (vowels.has(right[k])) {
      rightcount += 1;
    }
  }

  return leftcount === rightcount;
}

console.log(halvesAreAlike("book"));
