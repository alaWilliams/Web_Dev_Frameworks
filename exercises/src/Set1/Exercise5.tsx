// Exercise 5: Create a function called `getRandomNumber` that returns a random number between 1 and 10.
// You should use the function to achieve output of the following format, where the value 6 should be the random number:
// <p>Your lucky number is 6!</p>

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export default function Exercise5() {
 return (
  <p>Your lucky number is {getRandomNumber()}!</p>
 )
}
