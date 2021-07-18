import React from 'react'
import { useRecoilState } from 'recoil';
import { homeState } from './store';

const Home = () => {
  const [count, setCount] = useRecoilState(homeState);

  return (<div>
    <p>is Home page : {count}</p>
    <button onClick={() => {
      setCount(count + 1)
    }} >add</button>
  </div>)
}
export default Home
