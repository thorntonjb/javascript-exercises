const palindromes = function (word) {
    let lastLetter = word.length - 1;
    let state = false;
    word = word.replaceAll(" ", "");

    for (let i = 0; i < word.length; i++) {
      if (word[i] == word[lastLetter])
      {
        console.log("word[i]: " + word[i]);
        console.log("word[lastLetter]: " + word[lastLetter]);
        state = true;
        lastLetter--;
      }
      else
      {
        state = false;
      }
    }
    console.log(state);
    return state;
};

// Do not edit below this line
module.exports = palindromes;
