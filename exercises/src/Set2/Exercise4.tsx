// Create a new component as a separate file to represent a contact list, which can have multiple contact list items in it. You should create a single “ContactList” component, which renders multiple “ContactItem” components. For this the “ContactList” component must import “ContactItem” component. Render the “ContactList” component in the App.js. The rendered “ContactItem” components can be identical at this moment.

import ContactItem from "./Exercise3"

export default function ContactList() {
  return (
    <>
      <h2>Contact List</h2>
      <ContactItem name="Bob" address="Oulu 17"/>
      <ContactItem name="Donald Duck" address="Disney Road 5"/>
    </>
    
  )
}