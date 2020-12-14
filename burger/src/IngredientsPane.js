import Ingredient from './Ingredient'

function IngredientsPane(props) {

  const availableIngredients = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]

  const ingredientButtons = availableIngredients.map((ingredient, index) => {
    return (
      <Ingredient
        ingredient={ingredient}
        key={`ingredient-${index}`}
        addLayer={props.addLayer}
      />
    )
  })
  
  return(
    <div className="pane">
      {ingredientButtons}
    </div>
  )
}

export default IngredientsPane