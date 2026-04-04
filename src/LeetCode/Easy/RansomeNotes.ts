/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 */

export function canConstruct(ransomNote: string, magazine: string): boolean {
  let temp = magazine;

  let result = "";

  for (let i = 0; ransomNote.length > i; i++) {
    const letterRansom = ransomNote[i];

    const foundIndex = temp.indexOf(letterRansom);

    if (foundIndex === -1) {
      return false;
    }

    temp = temp.slice(0, foundIndex) + temp.slice(foundIndex + 1);

    result += letterRansom;
  }

  return result === ransomNote;
}

console.log("final", canConstruct("leetcode", "asefelgcotesfed"));
