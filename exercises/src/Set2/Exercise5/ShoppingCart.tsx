// Your objective is to create a representation of e-commerce application shopping cart. The shopping cart should include four example products. Each product should have a name, quantity in the cart and total price. You can decide how to present the products in the cart. The react code should be implemented so that you have one component “ShoppingCart”, which then renders the individual products, each as separate component. For now, you can name them Product1, Product2, Product3 for example. Later we will practice how to pass data to the components to avoid having multiple similar looking components with different values. Render the shopping list in the App.js.


import Product from './Product'

const products = [
  {name: 'Product1', quantity: 4, price: 3}, 
  {name: 'Product2', quantity: 10, price: 3}, 
  {name: 'Product3', quantity: 1, price: 99},]
export default function ShoppingCart() {
  return (
    <>
      <h1>My shopping cart</h1>
      {products.map((element, index)=> { 
        return <Product
          key={index} name={element.name} quantity={element.quantity} price={element.price}/>
        })}
    
    </>
  )
}