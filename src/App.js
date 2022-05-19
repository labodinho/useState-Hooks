import React, {useState}from 'react';
import './App.css'



/*THIS ********************const [count, setCount]= useState(counter())******************************WILL MAKE THE FUNCTION RUN EVERYTIME OUT COMPONENT RE-RENDERS*****
function counter () {
  console.log('running function');
  return 4
}

********************************************************/


 function App() {
    
   const [count, setCount]= useState(5)
   const [theme, setTheme]= useState()
  

   function increment () {
    setCount (prevCount => prevCount + 1)
    setTheme('Blue')
   }

   function decrement () {
    setCount(prevCount => prevCount -1)
    setTheme('Red')

  }
  return (
    <div>

      <h1>useState App</h1>
      <button onClick={decrement}>SUBTRACT (-)</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>ADD (+)</button>

    </div>
  )
}
export default App