// Create a new React component as a separate file to represent a person in a contact list, the component name is “ContactItem”. The person item should look roughly like in the UI wireframe below. The “Name” should be with big bold letters and “address” with smaller letters. Add some whitespace padding and borders for the ContactItem. Use the component to render multiple contact list items below each other in the App root component. For styling you can use normal CSS styling and modify the index.css file.

export default function ContactItem({name, address} : {name: string, address: string }){

  return (
    <div style={{border: '1px solid black',
                borderRadius: '8px',
                padding: '8px',
                marginBottom: '8px',
                width: '250px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',}}>
        <h2>{name}</h2>
        <p>{address}</p>
    </div>
  )
}