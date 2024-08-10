// 1) ==================== DNA Pairs ====================

export const dnaPairs = (str) => {
  // Check if input is a string and only contains valid DNA characters (A, T, C, G), or spaces, regardless of case.
  if (typeof str !== "string" || !/^[ATCG\s]+$/i.test(str)) {
    return "Not a valid DNA string";
  }

  const pairsObj = {
    C: "G",
    G: "C",
    T: "A",
    A: "T",
  };

  // Remove all spaces and convert the string to uppercase.
  const formattedStr = str.replace(/\s/g, "").toUpperCase();

  return formattedStr.split("").map((el) => [el, pairsObj[el]]);
};

// 2) ==================== Get certain data from a tweet ====================
export const getTweetData = (str) => {
  //   const tweetData = {
  //     tags: [],
  //     mentions: [],
  //     tagCount: 0,
  //     mentionCount: 0,
  //     length: str.length,
  //   };

  //   str.split(" ").forEach((word) => {
  //     if (word.startsWith("#")) {
  //       if (!tweetData.tags.includes(word)) {
  //         tweetData.tags.push(word);
  //         tweetData.tagCount++;
  //       }
  //     } else if (word.startsWith("@")) {
  //       if (!tweetData.mentions.includes(word)) {
  //         tweetData.mentions.push(word);
  //         tweetData.mentionCount++;
  //       }
  //     }
  //   });

  //   return tweetData;

  const tweetData = {
    tags: new Set(),
    mentions: new Set(),
    length: str.length,
  };

  const words = str.split(/\s+/);

  words.forEach((word) => {
    if (word.startsWith("#")) {
      tweetData.tags.add(word);
    } else if (word.startsWith("@")) {
      tweetData.mentions.add(word);
    }
  });

  return {
    tags: [...tweetData.tags],
    mentions: [...tweetData.mentions],
    tagCount: tweetData.tags.size,
    mentionCount: tweetData.mentions.size,
    length: tweetData.length,
  };
};

// 3) ==================== Add FizzBuzz multiples below a certain number ====================

export const calculateDivisors = (num) => {
  if (typeof num !== "number") return "Input must be a number";

  // Create new set to ensure unique values
  const multiples = new Set();

  // Add multiples of 3 an 5 to set
  for (let i = 0; i < Math.round(num); i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      multiples.add(i);
    } else if (i % 3 === 0) {
      multiples.add(i);
    } else if (i % 5 === 0) {
      multiples.add(i);
    }
  }

  // Create an array and use reduce to sum the values
  return [...multiples].reduce((acc, cur) => acc + cur, 0);
};

// 4) ==================== Updating remote students ====================
export const updateRemoteStudents = (arr) => {
  return arr.map((obj) => {
    if (!obj.location) {
      return {
        ...obj,
        location: "remote",
      };
    }

    return obj;
  });
};

// 5) ==================== Cash up the cafe till at the end of the day ====================
export const tillAddition = (cash) => {
  const cashValues = {
    "1p": 0.01,
    "2p": 0.02,
    "5p": 0.05,
    "10p": 0.1,
    "20p": 0.2,
    "50p": 0.5,
    "£1": 1,
    "£2": 2,
    "£5": 5,
    "£10": 10,
    "£20": 20,
    "£50": 50,
  };

  let total = 0;

  for (const [key, value] of Object.entries(cash)) {
    if (cashValues.hasOwnProperty(key) && value > 0) {
      total += cashValues[key] * value;
    }
  }

  return `£${total.toFixed(2)}`;
};

// 6) ==================== Change Calculator ====================
export const changeCalculator = (amount) => {
  const changeObj = {};
  const denominations = ["50", "20", "10", "5", "2", "1"];
};

// 7) ==================== Sentence to upper or lower camel case ====================
export const sentenceToCamelCase = (str, isPascalCase) => {
  if (typeof str !== "string" || typeof isPascalCase !== "boolean") return null;

  if (!str) return "";

  return str
    .split(" ")
    .map((word, index) =>
      index === 0 && !isPascalCase
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
};

// 8) ==================== Fold string ====================
export const foldString = (str) => {};
