import React, { useContext } from 'react'
import HomeContext from './store/HomeContext'
const Home = () => {
  const {state,setState } = useContext(HomeContext)
  return (<div>
    <p>is Home page : {state.count}</p>
    <button onClick={() => {
      setState({count:state.count+1})
    }} >add</button>
  </div>)
}
export default Home
