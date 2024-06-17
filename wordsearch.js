const wordSearch = (letters, word) => {
  let counter = 0; // initializes counter to zero

  if (letters.length === 0) {
    // if array is empty return false
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join("")); // defines new array of joined letters from the 'letters' array.
  for (l of horizontalJoin) {
    counter++;

    if (l.includes(word)) {
      return true;
    } else if (horizontalJoin.length === counter) {
      const newLetters = transpose(horizontalJoin);

      const newhorizontalJoin = newLetters.map((ls) => ls.join(""));

      counter = 0;
      for (l of newhorizontalJoin) {
        counter++;

        if (l.includes(word)) {
          return true;
        } else if (newhorizontalJoin.length === counter) {
          return false;
        }
      }
    }
  }
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
