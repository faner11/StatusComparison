import React from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { setCount } from './store/aboutSlice'

const About = () => {
  const count = useAppSelector((state) => state.about.value)
  const dispatch = useAppDispatch()

  return (<div>
    <p>is About page : {count}</p>
    <button onClick={() => {
      dispatch(setCount(count + 1))
    }} >add</button>
  </div>)
}
export default About