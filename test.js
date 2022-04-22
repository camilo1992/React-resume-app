/*
2.   Implement the function getVowels(String).
3.   Given a string, count the number of vowels and sort alphabetically
4.  
5.   Example:
6.  
7.   Hellow world => {e: 1, o: 2}
8.   Javascript is cool => {a: 2, i:2, o:2}
9.   Top Gun Lab, is Great => {a:2, e:1, i:1, o:1, u:1}
10. */

const findVowells = (str) => {
  const word = str.toLowerCase().trim();

  const wordArr = [...word];
  console.log(wordArr.length);
  const vowells = ["a", "e", "i", "o", "u"];

  let counter = [];
  let obj = {};

  for (let i = 0; i < wordArr.length; i++) {
    let vo = vowells.find((el) => {
      return el === wordArr[i];
    });
    // obj.vo = 1;
    if (vo) {
      //   console.log(typeof vo);
      counter.push(vo);
    }
  }

  for (let i = 0; i < counter.length; i++) {
    console.log(counter[i], typeof counter[i]);
    console.log(counter[i], "position");
    // obj.counter[i] = 1;
  }

  return [counter, obj];
};

console.log(findVowells("cristian camilo  u  e"));
// const vow = findVowells("cristian camilo  u  e");

// vow.reduce(prev, curr, i, (arr) => {
//   arr.find((el) => el === vowells[i]);

// });

// const test = ["a", "e", "i", "o", "u"];
// const test2 = [];
// for (let i = 0; i <= test.length; i++) {
//   let vo = test.find((el) => {
//     el == "a";
//   });
//   if( vo) {

//       test2.push(vo);
//   }
// }

// console.log(test2);
