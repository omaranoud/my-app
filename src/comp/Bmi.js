import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './Bmi.css'

function Bmi() {
  const [data,setdata]=useState([]);

  const [fname,setfname]=useState('');
  const [email,setemail]=useState('');

    const [weight,setweight]=useState('0');
  const [height,setheight]=useState('0');
  const [bmi,setbmi]=useState(0);
  const [msg,setmsg]=useState('');


  useEffect(()=>{
  axios.get('http://localhost:3000/users')
  .then(res =>setdata(res.data))
  .catch(er=>console.log(er));

  },)
  let imgSrc;





let calculbmi=(event)=>{
    
   event.preventDefault()
   console.log("Data:", data);


   axios.post('http://localhost:3000/users',{
    full_name: fname,
    email:email,
    weight:weight,
    height:height,
    bmi:bmi})
   .then(res =>setdata(res.data))
  .catch(er=>console.log(er));

   if(weight===0 || height===0){

    alert('Entre un valide weight and height')
   }else{
    
   let bmi=(weight / (height*0.01)) / (height*0.01);
    setbmi(bmi.toFixed(2))

    

    if(bmi<18.5){

      setmsg('You are under weight');
     // imgsrc=require('../src/imgs/underweight.png');

    }else if(bmi>=18.5 && bmi<25){

      setmsg('You have normal weight');
     // imgsrc=require('../src/imgs/underweight.png');



    }else if(bmi>=25 && bmi<30){

      setmsg('You are over weight');
     // imgsrc=require('../src/imgs/underweight.png');


      

    }else(
      setmsg('You are obesity')


    )

   }


}


if (bmi < 1) {
  imgSrc = null
} else {
  if(bmi<18.5) {
    imgSrc = require('../imgs/underweight.png')
  } else if (bmi>=18.5 && bmi<25) {
    imgSrc = require('../imgs/normal.png')
  } else if (bmi>=25 && bmi<30) {
    imgSrc = require('../imgs/overweight.png')
  }else{
    imgSrc = require('../imgs/obesity.png')
  }
}

const handelDelete=(id)=>{
  axios.delete('http://localhost:3000/users/'+id)
  .then(res =>{

  })
  .catch(er=>console.log(er));


}


let reload=()=> {
  window.location.reload();
}


  return (
    <div className='app'>
    <div className='bmi'>
  <div className='main'>

<h1>Calculate Your Bmi</h1>

<form onSubmit={calculbmi}>

<label><h3>Entre Full Name </h3></label>
  <input type='text' className='inp' value={fname} onChange={(e)=>setfname(e.target.value)}></input>

  <label><h3>Entre Email</h3></label>
  <input type='email' className='inp' value={email} onChange={(e)=>setemail(e.target.value)}></input>

  <label><h3>Entre Your Weight (Kg)</h3></label>
  <input type='number' className='inp' value={weight} onChange={(e)=>setweight(e.target.value)}></input>

  <label><h3>Entre Your height(Cm)</h3></label>
  <input type='number' className='inp' value={height} onChange={(e)=>setheight(e.target.value)}></input>

  <button className='btn' type='submit' > Submit</button>

  <button className='btn' type='reload' value={reload}  > Reload</button>

</form>

<div className='cont'>

<h3>Your Bmi is :{bmi} </h3>
<h3 className= {((bmi === 0) ? 'h34' :(bmi < 18.5) ? 'underweight' : (bmi < 25) ? 'normal' : (bmi < 30) ? 'overweight' : 'obesity')}>
{msg}
</h3>

<div className='cimg'>
<img src={imgSrc} alt='' className='centered-img' />

</div>

</div>


 

</div>

<div className='mainn'>
<h2>User Information Table</h2>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>Full Name</th>
        <th>Gmail</th>
        <th>Weight</th>
        <th>Height</th>
        <th>BMI</th>
        <th>Actions</th>

      </tr>
    </thead>
    <tbody>

    {data && data.map && data.map((value,index)=>(
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.full_name}</td>
        <td>{value.email}</td>
        <td>{value.weight}</td>
        <td>{value.height}</td>    
        <td>{value.bmi}</td>

        <td>
            <button className='btn-edit'>Edite</button>
            <button className='btn-delete' onClick={()=>handelDelete(value.id)}>delete</button>
        </td>    
    

      </tr>
   
    )
   )
    }
    </tbody>
  </table>

  </div>

    </div>


</div>








  )
}

export default Bmi;
