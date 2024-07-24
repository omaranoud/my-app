import React,{useState} from 'react'
import './App.css';
//import logo1 from './imgs/logo1.png'
import bg5 from './imgs/bg5.jpg'
import { Link } from 'react-router-dom';






function Home() {
  const [selectedCalculator, setSelectedCalculator] = useState(null);

  
  return (
    
    <div className='Home'>

     
     {selectedCalculator === null ? (

     <div className='card-contain'>
     

     <div className="card-1">
    
      <img className='bg5' src={bg5} alt="card-img" />
      <div className="card-content">
        <h2>Bmi calculator</h2>
        <p>The BMI (Body Mass Index) is the ratio of height to weight
           and is used and an indicator of being normal weight or overweight.</p>
        <div className='button' onClick={() => setSelectedCalculator('bmi')}><Link to="/bmi"  className='link'> Calcul</Link></div>      
      </div>
    </div>

    <div className="card-2">
      <img className='bg5' src={bg5} alt="card-img" />
      <div className="card-content">
        <h2>Bmr calculator</h2>
        <p>The Basal Metabolic Rate Calculator estimates your basal metabolic rate amount of
           energy expended while at rest in a neutrally environment</p>
           <div className='button' onClick={() => setSelectedCalculator('bmr')}><Link to="/bmr"  className='link'>  Calcul</Link></div>      

      </div>
    </div>


    <div className="card-3">
      <img className='bg5' src={bg5} alt="card-img" />
      <div className="card-content">
        <h2>Calorie Calculator</h2>
        <p>The Calorie Calculator can be used to estimate the number of calories a person needs 
          to consume each day with a clear objective</p>
          <div className='button' onClick={() => setSelectedCalculator('Calorie')}><Link to="/Calorie"  className='link'>  Calcul</Link></div>      
      </div>
    </div>


    <div className="card-4">
      <img className='bg5' src={bg5} alt="card-img" />
      <div className="card-content">
        <h2>Weight Gain Calculator</h2>
        <p>Weight Gain Calculator estimates a schedule for healthy weight
           gain based on guidelines from the Institute of Medicine</p>
           <div className='button' onClick={() => setSelectedCalculator('Calorie_gain')} ><Link to="/Calorie_gain"  className='link'>  Calcul</Link></div>      
      </div>
    </div>

    <div className="card-5">
      <img className='bg5' src={bg5} alt="card-img" />
      <div className="card-content">
        <h2>Weight lose Calculator</h2>
        <p>Weight loss calculator helps to know how many calories should you eat a day to lose weight. 
          Know your plan to reach goal weight</p>
          <div className='button' onClick={() => setSelectedCalculator('Calorie_lose')}><Link to="/Calorie_lose"  className='link'>  Calcul</Link></div>      
      </div>
    </div>

    <div className="card-6">
      <img className='bg5' src={bg5} alt="card-img" />
      <div className="card-content">
        <h2>Macros</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Image by Hans Braxmeier from Pixabay</p>
          <div className='button' onClick={() => setSelectedCalculator('Macros')}><Link to="/Macros"  className='link'>  Calcul</Link></div>      
      </div>
    </div>



    </div>
 ) : (
  <div className='calculator-content'>






   {/* {selectedCalculator === 'bmi' && <Bmi />}
    {selectedCalculator === 'bmr' && <Bmr />}
    {selectedCalculator === 'calorie' && <Calorie />}
    {selectedCalculator === 'calorie_gain' && <Calorie_gain />}
    {selectedCalculator === 'calorie_lose' && <Calorie_lose />}
*/}

    
    {/* Repeat for other calculators */}
  </div>
)}


    {/*  <Routes>
      <Route path="/bmi" element={<Bmi/>}></Route>
      <Route path="/bmr" element={<Bmr/>}></Route>
      <Route path="/calorie" element={<Calorie/>}></Route>

      <Route path="/Calorie_gain" element={<Calorie_gain/>}></Route>
      <Route path="/Calorie_lose" element={<Calorie_lose/>}></Route>





      </Routes>


 */}
 



    


    </div>
    
  )
}

export default Home
