// Exercise 1: Create a new react component called “Greeter”, which is used to greet the user. The Greeter component should print “Hello <username>”, where the username is delivered to the component via prop. This component could then be used to greet user with any name based on the value given to the component via prop.

export default function Greeter({ username }) {
  return (
    <div>Hello {username}</div>
  )


}