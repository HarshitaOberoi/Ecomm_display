import React from 'react'
import Home from './components/Home'
import Details from './components/Details'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div  className='flex'>
      
     <Routes>
      <Route path="/" element={<Home/>} />
     <Route path='/Details/:id' element={<Details/>}/>
     </Routes>
     
     
      </div>
    
  )
}

export default App
