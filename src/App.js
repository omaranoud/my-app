import React from 'react'
import logo1 from './imgs/logo1.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bmi from './comp/Bmi.js'
import Bmr from './comp/Bmr.js'
import Macros from './comp/Macros.js'
import Calorie from './comp/Calorie'
import CalorieG from './comp/CalorieGain'
import CalorieL from './comp/CalorieLose'
import Home from './Home';





function App() {

  
  return (
    
    <div className='app'>

       <div className='navbar'>
      <img className='logo' src={logo1} alt="logo"></img>
     </div>

     <Router>
     

     <Routes>

     <Route path="/" element={<Home/>}></Route>

     <Route path="/bmi" element={<Bmi/>}></Route>
     <Route path="/bmr" element={<Bmr/>}></Route>
     <Route path="/calorie" element={<Calorie/>}></Route>

     <Route path="/Calorie_gain" element={<CalorieG/>}></Route>
     <Route path="/Calorie_lose" element={<CalorieL/>}></Route>
     <Route path="/Macros" element={<Macros/>}></Route>






     </Routes>

     </Router>

     
    </div>
    
  )
}

export default App
