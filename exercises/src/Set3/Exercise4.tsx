// Exercise 4: Create a new component to represent a contact list, which can have multiple contact list items in it. You should create a single “ContactList” component, which renders multiple “ContactItem” components. Render the “ContactList” component in the App.js. The “ContactList” component should use props to receive the names and addresses of the persons to render.

import ContactItem from "./Exercise3";


const contactsData=[{
  name: 'Bill',
  address: 'Torikatu 45'
},
{name: 'Jane',
  address: 'Uusikatu 78'
},
{name: 'Paul',
  address: 'Kirkkokatu 452'

}]
export default function ContactList(){
  return (
    <>
      {contactsData.map(element => {
  return <ContactItem name={element.name} address={element.address} />;
})}
    </>
    
  )
}