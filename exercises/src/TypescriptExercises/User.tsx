//Create a component which displays user name. The component should have two props firstName, lastName both strings. Add age prop to the component/

type UserData = {
  firstName: string,
  lastName: string,
  age: number
}
export default function User ({firstName, lastName, age} : UserData){

  return (
    <div>Your name is: {firstName} {lastName}. You are {age} years old</div>
  )
}