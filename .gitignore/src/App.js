import './App.css';
import { Component , useState} from 'react';
function App(){ 
  //  usetate as array for now
  const [count,setCount]=useState(0);
  console.log(count);
  function increase(){ 
    setCount(count+1);
  }
  function decrease(){ 
    setCount(count-1)
  }
  return (
   <div className="container">
     <h1>{count}</h1>
     <button className="button" onClick={increase}>+</button>
     <button className="button" onClick={decrease}>-</button>
   </div>
 )
}
export default App;
