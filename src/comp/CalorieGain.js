import React,{useState} from 'react';
import './Calorie.css'

function CalorieGain() {

  const [weight,setweight]=useState('');
  const [height,setheight]=useState('');

  const [age,setage]=useState('');
  const [activity,setactivity]=useState('');
  const [Gaincalorie,setGaincalorie]=useState('');


  const [gender,setgender]=useState('');
  const [show, setshow] = useState(false);


  let calculbmr=(event)=>{

    event.preventDefault()


    const Gender={
      male:5,
      female:-165,
     };

     const Activity={
  
      sedentary:1.2,
      light:1.375,

      moderate:1.55,
      active:1.725,


     };

   let  bmr =(
      Gender[gender] +
      10 * parseFloat(weight) +
      6.25 * parseFloat(height) -
      5 * parseInt(age));
     let clr=((bmr*Activity[activity])+300)

     setGaincalorie(clr.toFixed(2))


      setshow(true);

  }


  return (
    <div>

<div className='bmr'>
  <div className='main'>

<h1>Weight Gain Calculator</h1>

<form onSubmit={calculbmr}>
<label><h3>Entre YourAge</h3></label>
  <input type='number' className='inp' value={age} onChange={(e)=>setage(e.target.value)}></input>
  <label><h3>Entre Your Weight (Kg)</h3></label>
  <input type='number' className='inp' value={weight} onChange={(e)=>setweight(e.target.value)}></input>

  <label><h3>Entre Your height(Cm)</h3></label>
  <input type='number' className='inp' value={height} onChange={(e)=>setheight(e.target.value)}></input>

  <div className='kgender'>

<label><h3>Gender</h3></label> 
<select name='gender' className='gender' value={gender} onChange={(e)=> setgender(e.target.value)}>        
    <option value='male'>Male</option>
    <option value='female'>Female</option>
</select>
</div>
<div className='Activity'>

          <label><h3>Activity Level</h3></label>
         <select  className='activity' value={activity} onChange={(e)=>setactivity(e.target.value)}>        
         <option value="sedentary">Sedentary (little or no exercise)</option>
         <option value="light">Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value="moderate">Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value="active">Very active (hard exercise/sports 6-7 days/week)</option>

         </select>
      
</div>

  <button className='btn' type='submit' > Submit</button>

  <button className='btn' type='reload'  > Reload</button>

</form>
{show && (<h3  className='bg'>Daily Calorie Requirements : { Gaincalorie}</h3>)}<br/>

    </div>
    </div>

    </div>

    
  )
}

export default CalorieGain