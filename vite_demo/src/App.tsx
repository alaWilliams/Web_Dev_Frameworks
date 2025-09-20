import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter'
import ColorList from './ColorList'
import ColorList2 from './ColorList2'
import ContactItem from './ContactItem'
import ContactList from './ContactList'


// Basic React Component Exercises

// These exercises are aimed to practice basic JSX use in a single component or in a single file. No need to import or export anything yet.
// Exercise 1: Render a <h1> heading with the text "Hello, React!" using JSX.
// Exercise 2: Create a function called `getGreeting` that returns a greeting message saying ‘Welcome to the World of React’. Use the function as JSX expression as follows:
// <p>{getGreeting()}</p>;
// Exercise 3: Define an array of colors as strings (for example ‘blue, ‘red’ etc.) and render a list of those colors using JSX. Create a single <p> element into which you render the colors separated by comma. You should have at least four different colors in the array.
// The output of the rendering as DOM structure should be for example <p>red, yellow, green, blue</p> if the array had those four values in it.
// Exercise 4: Define an array of numbers and render their squares using JSX. Squared means that the number is multiplied by itself. You should render each number as a <p> element in the following format <p>X squared is Y</p> where X is the number and Y is the squared value.
// If your numbers are for example 1,2,3,4,5 then the output as DOM structure should be:
// <p>1 squared is 1</p><p>2 squared is 4</p><p>3 squared is 9</p><p>4 squared is 16</p><p>5 squared is 25</p>
// Exercise 5: Create a function called `getRandomNumber` that returns a random number between 1 and 10.
// You should use the function to achieve output of the following format, where the value 6 should be the random number:
// <p>Your lucky number is 6!</p>
// Exercise 6: Define an array of names and render a list of greetings using JSX. The DOM structure of the output should be:
// <div><p>Greetings Alice!</p><p>Greetings Bob!</p></div>
// Exercise 7: Define an array of fruits and render a list of fruit names using JSX. The DOM structure of the output should be when oranges, apples and bananas are in the array as strings:

// <p>My favorite fruits are: oranges, apples, bananas</p>;


const getGreeting = () => {
  return 'Welcome to the World of React'
}
const myColors = ['blue', 'red', 'black', 'pink', 'white'];

const myNumbers = [1, 2, 3, 4, 5];

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10 )
}

const names = ['Alice', 'Bob', 'John', 'Gertrude'];

const fruit = ['apples', 'blackcurrants', 'pomelo', 'kiwi', 'dragon fruit'];
function App() {

  const contactData = [{name:'Tom', address:'Turku'}, {name: 'Bob', address:'Helsinki'}, {name: 'John', address: 'Oulu'}]
 
  return (
    <>
     {/* <p>{getGreeting()}</p>
     <h2>My colors:</h2>
     <p>{myColors.join(', ')}</p>
     
     <h2>Numbers squared:</h2>
     {myNumbers.map(num => (
      <p>{num} squared is {num*num}</p>
     ))
     }
     <p>Your lucky number is {getRandomNumber()}</p>

     <h2>Greetings:</h2>
     {names.map(name => (
      <p>Greetings {name}!</p>
     ))}

     <h2>Fruit:</h2>
     <p>My favorite fruit are: {fruit.join(', ')}.</p>

     <Greeter name={'Bob'}/>

     <ColorList color1={'red'} color2={'blue'} color3={'pink'} />

     <ColorList2 colorArray={['black', 'gray', 'tangerine', 'chestnut']} /> */}
    {/* <ContactItem name = 'Melanie' address='Oulu, Torikatu 7'/> */}

    <h2>Contact List</h2>
    <ContactList />
    {/* { contactData } */}

    </>
  )
}

export default App
