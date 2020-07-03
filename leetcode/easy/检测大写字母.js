/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    // all upper or lower
    if (word.toUpperCase() === word || word.toLowerCase() === word) {
      return true;
    }
    // first upper and rest lower
    if (word == word[0].toUpperCase() + word.slice(1).toLowerCase()) {
      return true;
    }
    return false;
    //   let reg1 = /^[A-Z]*$/;
    //   let reg2 = /^[A-Z][a-z]*$/;
    //   let reg3 = /^[a-z]*$/;
    //   return reg1.test(word) || reg2.test(word) || reg3.test(word);
  };
  
  s = detectCapitalUse('FFFFFf');
  s;
  