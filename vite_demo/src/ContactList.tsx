import ContactItem from "./ContactItem";

function ContactList (props) {
  return ( 
    <>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>

      {props.map(item => item.name)}
    </>
  )
}

export default ContactList