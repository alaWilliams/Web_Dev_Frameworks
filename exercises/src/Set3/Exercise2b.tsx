// Create a new React component called `ColorList2` that renders an unordered list of different colors, each color as a string in list item. The colors are passed to the ColorList component as props. Use single prop to deliver the color values to the component as an array. In addition use the color value to also style the list items so that the color is used in the list item background. Import the component and render it in the main App component



export default function ColorList2({ colors }) {
  return (
    <ul>
      {colors.map(color => (<li>{color}</li>))}
    </ul>
  )
}