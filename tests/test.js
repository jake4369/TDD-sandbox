import { assert } from "chai";

import {
  dnaPairs,
  getTweetData,
  calculateDivisors,
  updateRemoteStudents,
  tillAddition,
} from "./../index.js";

// Uncomment 'describe' block to test each function independently

// 1) ==================== DNA Pairs ====================
/*
describe("DNA Pairs", () => {
  it("Should return correct error message if input is not a string", () => {
    assert.equal(dnaPairs(9), "Not a valid DNA string");
  });

  it("Should return error message if input is not a valid DNA string", () => {
    const actual = dnaPairs("B");
    const expected = "Not a valid DNA string";

    assert.equal(actual, expected, "Input should be a valid DNA string");
  });

  it("Should handle empty string inputs", () => {
    const actual = dnaPairs("");
    const expected = "Not a valid DNA string";

    assert.equal(actual, expected, "Input should be a valid DNA string");
  });

  it("Should handle lowercase string inputs", () => {
    const actual = dnaPairs("g");
    const expected = [["G", "C"]];
    assert.deepEqual(
      actual,
      expected,
      "Function should handle lowercase inputs"
    );
  });

  it("Should remove whitespace from between characters", () => {
    const actual = dnaPairs("A G");
    const expected = [
      ["A", "T"],
      ["G", "C"],
    ];
    assert.deepEqual(actual, expected, "Function should remove whitespace");
  });

  it("Should remove whitespace from beginning and end of string", () => {
    const actual = dnaPairs(" AG ");
    const expected = [
      ["A", "T"],
      ["G", "C"],
    ];
    assert.deepEqual(actual, expected, "Function should remove whitespace");
  });

  it("Should only accept valid DNA characters", () => {
    const actual = dnaPairs("A!G");

    assert.equal(
      actual,
      "Not a valid DNA string",
      "Function should not accept special characters"
    );
  });

  it("Should return an array", () => {
    const actual = dnaPairs("G");
    assert.isArray(actual, "Function should return an array");
  });

  it("Should return an array of arrays", () => {
    const actual = dnaPairs("G");
    actual.forEach((el, index) => {
      assert.isArray(el, `Element at index ${index} should be an array`);
    });
  });

  it("Should check that each nested array contains only string", () => {
    const actual = dnaPairs("G");
    actual.forEach((arr, index) => {
      arr.forEach((el) => {
        assert.isString(el, "Should be a string");
      });
    });
  });

  it('Should return [["G", "C"]] when passed "G"', () => {
    const actual = dnaPairs("G");
    const expected = [["G", "C"]];

    assert.deepEqual(actual, expected, "Output is incorrect");
  });

  it('Should return [ ["A", "T"], ["G", "C"] ] when passed "AG"', () => {
    const actual = dnaPairs("AG");
    const expected = [
      ["A", "T"],
      ["G", "C"],
    ];

    assert.deepEqual(actual, expected, "Output is incorrect");
  });

  it('Should return [ ["A", "T"], ["G", "C"] ] when passed "AG"', () => {
    const actual = dnaPairs("ATAG");
    const expected = [
      ["A", "T"],
      ["T", "A"],
      ["A", "T"],
      ["G", "C"],
    ];

    assert.deepEqual(actual, expected, "Output is incorrect");
  });

  it("Should return correct pairs for a long DNA string", () => {
    const actual = dnaPairs("ATCGATCGATCGATCG");
    const expected = [
      ["A", "T"],
      ["T", "A"],
      ["C", "G"],
      ["G", "C"],
      ["A", "T"],
      ["T", "A"],
      ["C", "G"],
      ["G", "C"],
      ["A", "T"],
      ["T", "A"],
      ["C", "G"],
      ["G", "C"],
      ["A", "T"],
      ["T", "A"],
      ["C", "G"],
      ["G", "C"],
    ];

    assert.deepEqual(
      actual,
      expected,
      "Output is incorrect for long DNA string"
    );
  });
});
*/

// 2) ==================== Get certain data from a tweet ====================
/*
describe("getTweetData", () => {
  it("Should return an object", () => {
    const actual = getTweetData("My awesome tweet");
    assert.typeOf(actual, "object", "Should return an object");
  });

  it("Should return an object with the correct properties", () => {
    const actual = getTweetData("My awesome tweet");

    assert.property(actual, "tags", "Should have property - 'tags'");
    assert.property(actual, "mentions", "Should have property - 'mentions'");
    assert.property(actual, "tagCount", "Should have property - 'tagCount'");
    assert.property(
      actual,
      "mentionCount",
      "Should have property - 'mentionCount'"
    );
    assert.property(actual, "length", "Should have property - 'length'");
  });

  it("Should have correct object property types", () => {
    const actual = getTweetData("My awesome tweet");

    assert.typeOf(actual.tags, "array", "'tags' property should be an array");
    assert.typeOf(
      actual.mentions,
      "array",
      "'mentions' property should be an array"
    );
    assert.typeOf(
      actual.tagCount,
      "number",
      "'tagCount' property should be an array"
    );
    assert.typeOf(
      actual.mentionCount,
      "number",
      "'mentionCount' property should be an array"
    );
    assert.typeOf(
      actual.length,
      "number",
      "'length' property should be an array"
    );
  });

  it("Should return correct object if passed an empty string", () => {
    const actual = getTweetData("");
    const expected = {
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 0,
    };

    assert.deepEqual(actual, expected);
  });

  it("Should handle mentions", () => {
    const actual = getTweetData("My awesome tweet to @elonmusk");
    const expected = {
      tags: [],
      mentions: ["@elonmusk"],
      tagCount: 0,
      mentionCount: 1,
      length: 29,
    };

    assert.deepEqual(actual, expected);
  });

  it("Should handle tags", () => {
    const actual = getTweetData("My awesome tweet about #coding");
    const expected = {
      tags: ["#coding"],
      mentions: [],
      tagCount: 1,
      mentionCount: 0,
      length: 30,
    };

    assert.deepEqual(actual, expected);
  });

  it("Should handle tags and mentions", () => {
    const actual = getTweetData("My awesome tweet about #coding to @elonmusk");
    const expected = {
      tags: ["#coding"],
      mentions: ["@elonmusk"],
      tagCount: 1,
      mentionCount: 1,
      length: 43,
    };

    assert.deepEqual(actual, expected);
  });

  it("Should handle multiple tags and multiple mentions", () => {
    const actual = getTweetData(
      "I am #coding with @rubberduck I love #football and @astonvilla"
    );
    const expected = {
      tags: ["#coding", "#football"],
      mentions: ["@rubberduck", "@astonvilla"],
      tagCount: 2,
      mentionCount: 2,
      length: 62,
    };

    assert.deepEqual(actual, expected);
  });

  it("Should return only unique tags and unique mentions", () => {
    const actual = getTweetData(
      "I am #cooking with @gordonramsey I love #cooking and @gordonramsey"
    );
    const expected = {
      tags: ["#cooking"],
      mentions: ["@gordonramsey"],
      tagCount: 1,
      mentionCount: 1,
      length: 66,
    };

    assert.deepEqual(actual, expected);
  });
});
*/

// 3) ==================== Add FizzBuzz multiples below a certain number ====================
/*
describe("calculateDivisors", () => {
  // Function should only take numbers as argument
  it("Should only take numbers as arguments", () => {
    const actual = calculateDivisors("5");
    assert.isNotNumber(actual, "Input must be a number");
    assert.equal(actual, "Input must be a number", "Input must be a number");
  });

  // Check function returns a number
  it("Should return a number", () => {
    const actual = calculateDivisors(5);
    assert.typeOf(actual, "number", "Function should return a number");
  });

  // Input of 0 should return 0
  it("Should return 0 when 1 is passed as an argument", () => {
    const actual = calculateDivisors(0);
    const expected = 0;
    assert.equal(actual, expected, "Should return 0 when passed 0 as argument");
  });

  // Input of 1 should return 0
  it("Should return 0 when 1 is passed as an argument", () => {
    const actual = calculateDivisors(1);
    const expected = 0;
    assert.equal(actual, expected, "Should return 0 when passed 1 as argument");
  });

  // Input of negative number should return 0
  it("Should return 0 when 1 is passed as an argument", () => {
    const actual = calculateDivisors(-10);
    const expected = 0;
    assert.equal(
      actual,
      expected,
      "Should return 0 when passed negative number as argument"
    );
  });

  // Input of 5 should return 3
  it("Should return 3 when 5 is passed as an argument", () => {
    const actual = calculateDivisors(5);
    const expected = 3;
    assert.equal(actual, expected, "Should return 3 when passed 5 as argument");
  });

  // Input of 6 should return 8
  it("Should return 8 when 6 is passed as an argument", () => {
    const actual = calculateDivisors(6);
    const expected = 8;
    assert.equal(actual, expected, "Should return 8 when passed 6 as argument");
  });

  // Input of 10 should return 23
  it("Should return 23 when 10 is passed as an argument", () => {
    const actual = calculateDivisors(10);
    const expected = 23;
    assert.equal(
      actual,
      expected,
      "Should return 23 when passed 10 as argument"
    );
  });

  // Input of 12 should return 33
  it("Should return 33 when 12 is passed as an argument", () => {
    const actual = calculateDivisors(12);
    const expected = 33;
    assert.equal(
      actual,
      expected,
      "Should return 33 when passed 12 as argument"
    );
  });

  // Input of 13 should return 45
  it("Should return 45 when 13 is passed as an argument", () => {
    const actual = calculateDivisors(13);
    const expected = 45;
    assert.equal(
      actual,
      expected,
      "Should return 45 when passed 13 as argument"
    );
  });

  // It should correctly handle floating point numbers
  it("Should return 33 when 12.4 is passed as an argument", () => {
    const actual = calculateDivisors(12.4);
    const expected = 33;
    assert.equal(
      actual,
      expected,
      "Should return 33 when passed 12 as argument"
    );
  });

  // It should correctly handle floating point numbers
  it("Should return 45 when 12.5 is passed as an argument", () => {
    const actual = calculateDivisors(12.5);
    const expected = 45;
    assert.equal(
      actual,
      expected,
      "Should return 45 when passed 12.5 as argument"
    );
  });
});
*/

// 4) ==================== Updating remote students ====================
/*
describe("updateRemoteStudents", () => {
  // Check that function returns an array
  it("Should return an array", () => {
    const actual = updateRemoteStudents([{ name: "Euler", age: 27 }]);
    assert.isArray(actual, "Should return an array");
  });

  // Check that function can handle an empty array input
  it("Should return an empty array when passed an empty array", () => {
    const inputArray = [];
    const actual = updateRemoteStudents(inputArray);

    assert.deepEqual(actual, [], "Should return an empty array");
  });

  // Test for pure function behavior
  it("Should not mutate the original array", () => {
    const inputArray = [{ name: "Euclid", age: 30 }];
    const inputCopy = [...inputArray]; // Shallow copy to compare later
    updateRemoteStudents(inputArray);
    assert.deepEqual(
      inputArray,
      inputCopy,
      "The original array should not be mutated"
    );
  });

  // Check that function still produces correct results
  it("Should produce the correct output without modifying input", () => {
    const inputArray = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
    ];
    const actual = updateRemoteStudents(inputArray);
    const expected = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22, location: "remote" },
    ];

    // Ensure the original array wasn't changed
    const originalArray = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
    ];
    assert.deepEqual(
      inputArray,
      originalArray,
      "The original array should remain unchanged"
    );

    // Check that the returned result is correct
    assert.deepEqual(
      actual,
      expected,
      "Function should return the expected array"
    );
  });

  // Check if each element of the array is an object
  it("Should check that each element is an object", () => {
    const inputArray = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    const actual = updateRemoteStudents(inputArray);
    actual.forEach((el) => {
      assert.isObject(el, "Elements of the array should be objects");
    });
  });

  // Check that single object has been correctly updated
  it("Should update student object", () => {
    const inputArray = [{ name: "Euler", age: 27 }];
    const actual = updateRemoteStudents(inputArray);
    const expected = [{ name: "Euler", age: 27, location: "remote" }];

    assert.deepEqual(actual, expected);
  });

  // Check multiple objects are updated correctly
  it("Should update multiple student objects", () => {
    const inputArray = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Tao", age: 47, location: "manchester" },
    ];
    const actual = updateRemoteStudents(inputArray);
    const expected = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22, location: "remote" },
      { name: "Tao", age: 47, location: "manchester" },
    ];

    assert.deepEqual(actual, expected);
  });
});
*/

// 5) ==================== Cash up the cafe till at the end of the day ====================
describe("tillAddition", () => {
  // Function should return a string
  it("Should return a string", () => {
    const actual = tillAddition({ "1p": 1, "2p": 1 });

    assert.isString(actual, "Should return a string");
  });

  // Function should return string in correct format
  it("Should correctly format the returned string", () => {
    const actual = tillAddition({ "1p": 1, "2p": 1 });
    const regexp = /^£\d+\.\d{2}$/;

    assert.match(actual, regexp, "Should be in the format £0.00");
  });

  // Function should return £0.00 when passed a empty object
  it("Should return £0.00 when passed an empty object", () => {
    const actual = tillAddition({});
    const expected = "£0.00";

    assert.equal(actual, expected, "Should return £0.00");
  });

  // Function should handle incorrect keys
  it("Should handle incorrect cash denominations", () => {
    const actual = tillAddition({
      "5p": 1,
      "10p": 1,
      "20p": 1,
      "50p": 1,
      "£1": 1,
      "two pound": 1,
    });
    const expected = "£1.85";

    assert.equal(
      actual,
      expected,
      "Should handle incorrect cash denominations"
    );
  });

  // Function should handle incorrect value types
  it("Should handle cases where key is NaN", () => {
    const actual = tillAddition({
      "5p": 1,
      "10p": 1,
      "20p": 1,
      "50p": 1,
      "£1": 1,
      "£2": "3",
    });
    const expected = "£7.85";

    assert.equal(actual, expected, "Value must be a number");
  });

  // Function should handle non-numeric strings
  it("Should ignore non-numeric string values", () => {
    const actual = tillAddition({ "£1": "one", "£2": 2 });
    const expected = "£4.00";

    assert.equal(actual, expected, "Should ignore non-numeric string values");
  });

  // Function should handle empty strings as keys
  it("Should ignore empty string keys", () => {
    const actual = tillAddition({ "£1": 1, "": 5 });
    const expected = "£1.00";

    assert.equal(actual, expected, "Should ignore empty string keys");
  });

  // Function should handle zero quantities
  it("Should handle zero quantities correctly", () => {
    const actual = tillAddition({ "£1": 0, "£2": 0 });
    const expected = "£0.00";

    assert.equal(actual, expected, "Should handle zero quantities correctly");
  });

  // Function should handle objects with no valid entries
  it("Should return £0.00 when object has no valid entries", () => {
    const actual = tillAddition({ fake: 1, invalid: 2 });
    const expected = "£0.00";

    assert.equal(
      actual,
      expected,
      "Should return £0.00 when object has no valid entries"
    );
  });

  // Function should handle floating point precision
  it("Should correctly handle floating-point precision", () => {
    const actual = tillAddition({
      "£1": 1,
      "£2": 1,
      "£5": 1,
      "10p": 1,
      "20p": 1,
    });
    const expected = "£8.30";

    assert.equal(
      actual,
      expected,
      "Should correctly handle floating-point precision"
    );
  });

  // Function should handle negative values
  it("Should handle negative values by ignoring them", () => {
    const actual = tillAddition({ "£1": -1, "£2": 2 });
    const expected = "£4.00";

    assert.equal(actual, expected, "Should ignore negative values");
  });

  // Function should return the correct total
  it('Should return £0.03 when passed { "1p": 1, "2p": 1 }', () => {
    const actual = tillAddition({ "1p": 1, "2p": 1 });
    const expected = "£0.03";

    assert.equal(actual, expected, "Should return the correct total");
  });

  it('Should return £0.38 when passed { "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 }', () => {
    const actual = tillAddition({
      "1p": 1,
      "2p": 1,
      "5p": 1,
      "10p": 1,
      "20p": 1,
    });
    const expected = "£0.38";

    assert.equal(actual, expected, "Should return the correct total");
  });

  it('Should return £1.85 when passed { "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 }', () => {
    const actual = tillAddition({
      "5p": 1,
      "10p": 1,
      "20p": 1,
      "50p": 1,
      "£1": 1,
    });
    const expected = "£1.85";

    assert.equal(actual, expected, "Should return the correct total");
  });

  // Function should handle large quantities
  it("Should handle large quantities correctly", () => {
    const actual = tillAddition({ "1p": 10000, "£1": 1 });
    const expected = "£101.00";

    assert.equal(actual, expected, "Should handle large quantities correctly");
  });
});
