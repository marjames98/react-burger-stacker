function StackingArea(props) {
    const layers = props.layers.reverse().map((l) => {
      return <div className="ingredient" style={{ backgroundColor: l.color }}/>
    })
    
    return(
      <div>
        {layers}
      </div>
    )
  }
  
  export default StackingArea
  