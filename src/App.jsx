import React from 'react'
import Card from'./components/Card'
import Users from'./components/Users'

const App = () => {

  const arr=[10,20,30,40]
  return (
    <div className='parent'>

    {arr.map(function(elem){
      return <h1>{elem}</h1>
    })}
   


      </div>
 
  )
}

export default App
