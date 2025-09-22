// Exercise 6: Define an array of names and render a list of greetings using JSX. The DOM structure of the output should be:

// <div><p>Greetings Alice!</p><p>Greetings Bob!</p></div>

const names = ['Alice', 'Bob', 'John', 'Mary', 'Kimberly'];

export default function Exercise6() {
  return (
    <div>
      {names.map(name => <p>Greetings {name}!</p>)}
    </div>
  )
}