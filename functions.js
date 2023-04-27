'use strict';
let names = [
  'isEvenAndDivisibleByFour',
  'isVowelOrEven',
  'isBetween',
  'hasEnoughCoins',
  'isPalindrome',
  'isMultipleOfThreeOrFive',
  'isLeapYear',
  'hasUniqueCharacters'
];

let exercises = [
  'Write a function named isEvenAndDivisibleByFour that takes a number as an argument and returns true if the number is even and divisible by 4, and false otherwise.',
  'Write a function named isVowelOrEven that takes a string as an argument and returns true if the string contains a vowel or its length is even, and false otherwise.',
  'Write a function named isBetween that takes three numbers (a, b, c) as arguments and returns true if b is between a and c, and false otherwise.',
  'Write a function named hasEnoughCoins that takes two numbers (quarters, dimes) as arguments and returns true if the total value of the coins is at least 75 cents, and false otherwise.',
  'Write a function named isPalindrome that takes a string as an argument and returns true if the string is the same forwards and backwards, and false otherwise.',
  'Write a function named isMultipleOfThreeOrFive that takes a number as an argument and returns true if the number is a multiple of 3 or 5, and false otherwise.',
  'Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year (divisible by 4, but not by 100 unless also divisible by 400), and false otherwise.',
  'Write a function named hasUniqueCharacters that takes a string as an argument and returns true if all the characters in the string are unique, and false otherwise.'
];

function renderFunctions(){
  for (let i = 0; i < exercises.length; i++){
    document.write(`
      <li class='functions'>
        <h4>${names[i]}</h4>
        <p>${exercises[i]}</p>
        <button onClick=renderSolution()>View Potential Solution</button>
      </li>
    `
    );
  }
}

function renderSolution(){
  alert(`
    ***Solutions coming soon!***
  `)
}