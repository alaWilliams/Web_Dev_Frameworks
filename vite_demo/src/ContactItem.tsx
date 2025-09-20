import React from 'react'


function ContactItem (props) {
  return (
    <>
      <div style={{
                border: '1px solid black',
                borderRadius: '8px',
                padding: '8px',
                marginBottom: '8px',
                width: '250px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}>
        <h1>{props.name}</h1>
        <div>{props.address}</div> 
        
      </div>
     
    </>
  )
}

export default ContactItem