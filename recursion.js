/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length===0) return 1;

  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) return str;
  
  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if(arr.length===0) return false;

  return arr[0]===val || find(arr.slice(1),val)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let flippedStr = "";

  function _flipString(str, i) {
    if (i < 0) return;
    flippedStr += str[i];
    _flipString(str, i - 1);
  }

  _flipString(str, str.length - 1);

  return flippedStr === str;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  let flippedStr = "";

  function _flipString(str, i) {
    if (i < 0) return;
    flippedStr += str[i];
    _flipString(str, i - 1);
  }

  _flipString(str, str.length - 1);
  return flippedStr;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

  function _findIndex(arr, val, i){
    if (arr.length === i) return -1;
    if (arr[i] === val) return i;
    return _findIndex(arr, val, i+1);
  }

  return _findIndex(arr, val, 0);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  //debugger;
  function _gatherStrings(obj, strings) {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        strings.push(obj[key]);
      }
      else if (typeof obj[key] === "object"){
        _gatherStrings(obj[key], strings);
      } 
    }
    return strings;
  }
  return _gatherStrings(obj, []);
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
