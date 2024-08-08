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
export const updateRemoteStudents = () => {};
