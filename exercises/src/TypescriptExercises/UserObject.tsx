//Create a component which displays user name. The component should have two props firstName, lastName both strings. Add age prop to the component. Create a component where user information is passes through a single prop as an object.


type UserData = {
  firstName: string,
  lastName: string,
  age: number
}

type UserProps = {
  user: UserData

}
export default function User ({ user } : UserProps){
  const { firstName, lastName, age } = user

  return (
    <div>Your name is: {firstName} {lastName}. You are {age} years old</div>
  )
}