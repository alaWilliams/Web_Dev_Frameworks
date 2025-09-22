// Exercise 7: Define an array of fruits and render a list of fruit names using JSX. The DOM structure of the output should be when oranges, apples and bananas are in the array as strings:

// <p>My favorite fruits are: oranges, apples, bananas</p>;

const fruit = ['apples', 'oranges', 'bananas', 'kiwis'];

export default function Exercise7() {
  return (
    <p>My favorite fruit are: {fruit.join(', ')}.</p>
  )
}