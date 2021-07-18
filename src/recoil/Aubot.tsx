import React from 'react'
import { useRecoilState } from 'recoil';
import { aboutState } from './store';

const About = () => {
    const [count, setCount] = useRecoilState(aboutState);

    return (<div>
        <p>is About page : {count}</p>
        <button onClick={() => {
            setCount(count+1)
        }} >add</button>
    </div>)
}
export default About
