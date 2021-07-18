import React, { useContext } from 'react'
import AubotContext from './store/AubotContext'
const Aubot = () => {
  const {state,setState } = useContext(AubotContext)
  return (<div>
    <p>is Aubot page : {state.count}</p>
    <button onClick={() => {
      setState({count:state.count+1})
    }} >add</button>
  </div>)
}
export default Aubot
