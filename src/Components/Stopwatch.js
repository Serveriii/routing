
import React, { useEffect, useRef, useState } from 'react'
import Toggle from './Toggle'

export default function Stopwatch() {
  const timeRef = useRef();
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    console.log("componentDidMount")
    start();

    return () => {
      console.log("componentWillUnmount")
      stop();
    }
  }, [])

  function start(){
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000);
    timeRef.current = id;
    console.log(timeRef.current)
  }
  
  function stop(){
    clearInterval(timeRef.current);
  }
  
  
  return (
    <div style={{margin: "30px"}}>
      {time.toLocaleTimeString()}
      <Toggle start={start} stop={stop}/>
    </div>
  )
}
