import { assert } from "chai";

import {
  dnaPairs,
  getTweetData,
  calculateDivisors,
  updateRemoteStudents,
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

// 3) ==================== Updating remote students ====================
