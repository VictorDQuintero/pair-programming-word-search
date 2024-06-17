const wordSearch = (letters, word) => {
  let counter = 0; // initializes counter to zero

  if (letters.length === 0) {
    // if array is empty return false
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join("")); // new array of words from the letters array joined horizontally

  const verticalJoin = transpose(letters).map((ls) => ls.join("")); // new array of words from the letters array joined vertically

  const checkWord = (joinedLetters) => {
    // function that does the looping and returns true if a match is found, false if not found
    for (let l of joinedLetters) {
      if (l.includes(word)) return true;
    }
    return false;
  };

  return checkWord(horizontalJoin) || checkWord(verticalJoin); // returns true if the word is present in either passthrough, false if not
};

const transpose = function (matrix) {
  let newMatrix = [];
  let subArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    //loops through the "columns" of the original matrix
    for (let j = 0; j < matrix.length; j++) {
      //loops through the "rows" of the original matrix
      subArr.push(matrix[j][i]); // pushes transposed element into new row
    }
    newMatrix.push(subArr); // pushes new row into new Matrix
    subArr = []; // resets new row
  }

  matrix = newMatrix;

  return matrix;
};

module.exports = wordSearch;
