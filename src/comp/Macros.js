import React,{useState} from 'react'
import carbs from '../imgs/carbs.png'
import protein from '../imgs/protein.png'
import fat from '../imgs/fat.png'
import './Macros.css'


function Macros() {

    const [calorie,setcalorie]=useState('0');
    const [show, setshow] = useState(false);
   

    let calculbmr=(event)=>{
    
        event.preventDefault()
        setshow(true);

    }

    
  let  carbscalorie=(40/100)*calorie;
    let  proteincalorie=(30/100)*calorie;
    let  fatcalorie=(30/100)*calorie;

    let Protein=(proteincalorie/4).toFixed(0);
    let Carbs=(carbscalorie/4).toFixed(0);
    let Fat=(fatcalorie/9).toFixed(0);

  return (
    <div className='bmr'>
        <div className='main'>

<h1>Macros </h1>

<form onSubmit={calculbmr}>

<label><h3>Entre your calorie </h3></label>
  <input type='text' className='inp' value={calorie} onChange={(e)=>setcalorie(e.target.value)}></input>
  <button className='btn' type='submit' > Submit</button>

  {show &&(

<div className='hide'>

        <div className='imgs'>

            <div >
            <img src={protein} alt='' className='protein-img' />
            <b> <p>{Protein}g</p></b>
            </div>
            <div>
            <img src={carbs} alt='' className='carbs-img' />
            <b><p>{Carbs}g</p></b>

            </div>
            <div>
            <img src={fat} alt='' className='fat-img' />
           <b> <p>{Fat}g</p></b>

            </div>

            </div>

       </div>
        )}





</form>
</div>
    </div>
  )
}

export default Macros