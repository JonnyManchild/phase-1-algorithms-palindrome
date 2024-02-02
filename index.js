function isPalindrome(word) {
// initial concept: 

/*  if (word[0] === word[word.length-1]) {
    if (word[1] === word[word.length-2]) {
      if (word[2] === word[word.length-3]) {
        if (word[3] === word[word.length-4]) {
          return true
          
        } else return false
      } else return false
    } else return false
  } else return false */

// looping version

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  } 
  return true;
  
}

/* 
  check first letter against last letter
  if they match, check second letter against second to last letter
  continue this until end of word
*/

/*
  loop through letters in "word", checking each for it's positional match on the opposite side of the word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
