import React,{useState} from 'react'
import { useEffect } from 'react'

function UseState(props) {
    const [sol, setSol] = useState(" ");
    const [number, setNum] = useState(0);

    const sta = () => {
        setSol(sol=>sol == " "?props.para:"")
    }

    useEffect(()=>{
        alert("Content button clicked")
    },[sol])

    const like = () => {
        setNum(number=>number+1)
    }
  return (
    <div className='box'>
      <h3>{sol}</h3>
      <button onClick={sta}>Content</button>
      <h3>{number}</h3>
      <button onClick={like}>Like</button>
    </div>
  )
}

export default UseState