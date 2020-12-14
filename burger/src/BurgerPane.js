import StackingArea from './StackingArea'
import ClearButton from './ClearButton'

function BurgerPane(props) {
  return(
    <div className="pane">
      <StackingArea layers={props.layers}/>
      <ClearButton clear={props.clear}/>
    </div>
  )
}

export default BurgerPane
