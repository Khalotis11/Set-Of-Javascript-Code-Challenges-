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
  longestString(['short', 'really, really long!', 'medium']);


//   Write a function called reverseNumber that reverses a number.

function reverseNumber(num) {
  
    return Number(num.toString().split("").reverse().join(""));
   
  }
  reverseNumber(Number(12345));