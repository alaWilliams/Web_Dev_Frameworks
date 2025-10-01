import React, { useState, useEffect } from 'react'

export default function RecipesDemo() {
  const [recipes, setRecipes] = useState([]) 

  async function fetchRecipes() {
    const response = await fetch('http://localhost:3000/recipes');

    const data = await response.json()
    console.log(data)
    

  }

  useEffect(() => { fetchRecipes() }, [])

  return ( <div>
      <div>Recipes</div>
      <div style={{ display: 'flex', gap: 20 }}>
        <div>
          <h3>Recipe 1</h3>
          <div>Ingredients:</div>
          <ul>
            <li>1 cup flour</li> 
            <li>2 eggs</li>
            <li>1/2 cup milk</li>
          </ul>
        </div>

      </div>
  </div>)
}