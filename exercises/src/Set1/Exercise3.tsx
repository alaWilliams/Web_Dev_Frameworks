// Exercise 3: Define an array of colors as strings (for example ‘blue, ‘red’ etc.) and render a list of those colors using JSX. Create a single <p> element into which you render the colors separated by comma. You should have at least four different colors in the array.

// The output of the rendering as DOM structure should be for example <p>red, yellow, green, blue</p> if the array had those four values in it.

const colors = ['red', 'blue', 'pink', 'black'];

export default function Exercise3() {
  return (
    <p>{colors.join(', ')}</p>
  ) 
}