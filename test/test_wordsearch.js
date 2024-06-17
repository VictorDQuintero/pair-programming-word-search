const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function () {
  it("should return false if the word is not present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present", function () {
    const result = wordSearch(
      [
        ["P", "A", "Q", "R", "N", "K", "G", "S"],
        ["H", "L", "T", "Y", "P", "Z", "B", "V"],
        ["E", "E", "U", "O", "M", "Q", "W", "E"],
        ["D", "X", "G", "B", "F", "C", "A", "L"],
        ["K", "A", "I", "W", "D", "J", "H", "Q"],
        ["T", "N", "L", "M", "S", "T", "Y", "K"],
        ["M", "D", "O", "Z", "X", "N", "R", "F"],
        ["B", "E", "B", "L", "G", "E", "C", "M"],
        ["N", "R", "P", "V", "J", "U", "D", "A"],
      ],
      "ALEXANDER"
    );

    assert.isTrue(result);
  });

  it("should return false if the array is empty", function () {
    const result = wordSearch([], "ALEXANDER");

    assert.isFalse(result);
  });
});
