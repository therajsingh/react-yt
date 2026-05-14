import React from 'react'

const App = () => {
  function btnClicked(){
    console.log(`Button Clicked`);
  }
  return (
    <div>
      <button onClick={btnClicked}></button>
    </div>
  )
}

export default App
