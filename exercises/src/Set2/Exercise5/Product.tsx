export default function Product({name, quantity, price}){

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
        <p>Quantity: {quantity}</p>
        <p>Price: {price}</p>
        <div>Total price: {quantity * price}</div>
    </div>
  )
}