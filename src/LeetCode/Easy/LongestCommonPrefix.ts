/**
 Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 */

function longestCommonPrefix(strs: string[]): string {
  let pref = "";

  let short = strs[0];

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < short.length) {
      short = strs[i];
    }
  }

  for (let i = 0; i < short.length; i++) {
    const letter = short[i];
    let allMatch = true;
    for (let k = 0; k < strs.length; k++) {
      if (letter !== strs[k][i]) {
        allMatch = false;
        break;
      }
    }

    if (allMatch) {
      pref += letter;
    } else {
      break;
    }
  }

  return pref;
}

console.log("result: ", longestCommonPrefix(["cir", "car"]));
