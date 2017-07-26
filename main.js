// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x,y){
    if (x > y) {
      return x;
    } else if (y > x) {
      return y;
    }
}

console.log(max(4,20));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x,y,z){
  if (x > y && x > z) {
    return x;
  } else if (y > z) {
    return y;
  } else {
    return z;
  }
}

console.log(maxOfThree(1,2,3));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if (char === 'a') {
      return 'vowel';
    } else if (char === 'e') {
      return 'vowel';
    } else if (char === 'i') {
        return 'vowel';
    } else if (char === 'o') {
          return 'vowel';
    } else if (char === 'u') {
            return 'vowel';
    } else {
      return 'not vowel';
    }
}

console.log(isVowel('j'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(x,y){
  return x + y;
}

console.log(sum(2,4));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(x,y,z){
    return x * 3 + y * 3 + z * 3;
}

console.log(avg(1,2,3));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(x) {
  return x.length;
}

console.log(getLength('absolutely'));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(x,y){
  if (x>y){
    return x;
  } else {
    return y;
  }
}

console.log(greaterThan(5,4));


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(person) {
  return 'Hello, ' + person + '!';
}

console.log(greet('Brandon'));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madLib(verb,aPerson,action,group){
  return 'I ' + verb + ' with ' + aPerson + ' so I could ' + action + ' with ' + group;
}

console.log(madLib('ran','Shaun','boink','strangers'));
