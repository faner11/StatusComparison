import React from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { setCount } from './store/homeSlice'

const Home = () => {
    const count = useAppSelector((state) => state.home.value)
    const dispatch = useAppDispatch()

  return (<div>
    <p>is Home page : {count}</p>
    <button onClick={() => {
      dispatch(setCount(count + 1))
    }} >add</button>
  </div>)
}
export default Home