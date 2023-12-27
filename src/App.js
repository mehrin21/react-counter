import { useEffect, useState } from "react";
import randomColor from "randomcolor";
import './App.css'


function App (){

  // lets declare a state
    const [counter,setCounter] = useState(0)
    const [color,setColor] = useState('blue')
    // useEffect
     useEffect(()=>{
        console.log("useEffect")
        setColor(randomColor())
     }, [counter])

    // declare function
    function handlerIncrement(){
    
      setCounter((prevState)=>{
        return  prevState + 1
      })
      // setColor(randomColor())
    }
    function handlerDecrement(){
    
      setCounter((prevState)=>{
        return  prevState - 1
      })
      // setColor(randomColor())
    }
return(
<div className="counter">
  <h1 style={{ color: color, textAlign: 'center' }}>Counter: {counter}</h1> 
  <button onClick={handlerIncrement}>Increment</button> 
  <button onClick={handlerDecrement}>Decrement</button> 
</div>


)
}

export default App;