// Exercise 2: Create a function called `getGreeting` that returns a greeting message saying ‘Welcome to the World of React’. Use the function as JSX expression as follows:
// <p>{getGreeting()}</p>


function getGreeting() {
  return 'Welcome to the World of React';
}

export default function Exercise2() {
  return ( 
    <p>{getGreeting()}
    </p>)
}