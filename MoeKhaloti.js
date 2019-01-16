// Write a function that takes an array of strings and return the longest string in the array.

function longestString(arr) {
  let longestStr = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestStr.length) {
      longestStr = arr[i];
    }
  }
  return longestStr;
}
longestString(["short", "really, really long!", "medium"]);

//Write a function called reverseString that accepts a string and returns a reversed copy of the string.

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
reverseString("hello world");

//   Write a function called reverseNumber that reverses a number.

function reverseNumber(num) {
  return Number(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  );
}
reverseNumber(Number(12345));

//Write a function called commonElements that has parameters for two arrays.  Return an array of all items that are present in both arrays.  Do not modify the arrays that are passed in.

function commonElements(arr1, arr2) {
  let newArray = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let e = 0; e < arr2.length; e++) {
      if (arr1[i] === arr2[e]) newArray.push(arr1[i]);
    }
  }
  return newArray;
}
commonElements([1, 2, 3, 4], [3, 4, 5, 6]);

//Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. The first word within the output should be capitalized only if the original word was capitalized.

function toCamelCase(str) {
  if (str === "") return str;

  let snakeCase = str[0];

  strArr = str.split("");

  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i] === "-") {
      strArr[i + 1] = strArr[i + 1].toUpperCase();
    } else if (strArr[i] === "_") {
      strArr[i + 1] = strArr[i + 1].toUpperCase();
    } else snakeCase += strArr[i];
  }

  return snakeCase;
}
toCamelCase("the_stealth_warrior");

//Write a function called sortString that takes a string of letters and returns a string with the letters sorted in alphabetical order.

function sortString(str) {
  return str
    .split("")
    .sort()
    .join("");
}
console.log(sortString("cbda"));
