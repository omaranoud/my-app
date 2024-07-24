import React,{useState} from 'react';
import './Bmr.css'

function Bmr() {

  const [weight,setweight]=useState('');
  const [height,setheight]=useState('');

  const [age,setage]=useState('');
  const [bmr,setbmr]=useState('');

  const [gender,setgender]=useState('');
  const [show, setshow] = useState(false);


  let calculbmr=(event)=>{

    event.preventDefault()


    const Gender={
      male:5,
      female:-165,
     };
   let  bmr =(
      Gender[gender] +
      10 * parseFloat(weight) +
      6.25 * parseFloat(height) -
      5 * parseInt(age));
      setbmr(bmr.toFixed(2))


      setshow(true);

  }


  return (
    <div>

<div className='bmr'>
  <div className='main'>

<h1>Calculate Your Bmr</h1>

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

  <button className='btn' type='submit' > Submit</button>

  <button className='btn' type='reload'  > Reload</button>

</form>
{show && (<h3  className='bg'>Daily Calorie Requirements : {bmr}</h3>)}<br/>

    </div>
    </div>

    </div>

    
  )
}

export default Bmr