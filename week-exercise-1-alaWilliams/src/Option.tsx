function Option(prop) {
  return (
  <>
    <div className="option" style={{border: '1px solid black', height: '2.5rem', width: '100%', margin: '1rem', padding: '0.5rem'}}>{prop.option}</div>
  </>
  )
}

export default Option