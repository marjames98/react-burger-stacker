function Ingredient(props) {
    return(
      <div>
        {props.ingredient.name}
        <button onClick={() => { props.addLayer(props.ingredient) }}>
          {'>'}
        </button>
      </div>
    )
  }
  
  export default Ingredient