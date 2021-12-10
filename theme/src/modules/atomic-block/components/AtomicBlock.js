import { React } from '../dependencies'
import InsertHTML from '../../../tools/InsertHTML'
import InsertAB from '../components/InsertAB'

const GridContentItem = ( props ) => ( 
  <InsertHTML 
      type="content-item"
      params={ props.gridSettings }
    >
    <InsertAB
      type="form"
      params={ props.params }
      opt={ props.opt }
    />
  </InsertHTML>
)

export default GridContentItem