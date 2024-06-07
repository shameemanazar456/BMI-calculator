import { faCalculator, faL, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'


function App() {

  //state
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)

  const [isHeight, setIsHeight] = useState(true)
  const [isWeight, setIsWeight] = useState(true)

  const [isuw, setIsUw] = useState(false)
  const[isn, setIsN] = useState(false)
  const[isow, setIsOw] = useState(false)
  const[isO, setIsO] = useState(false)


  const validate = (e)=>{
    const {name, value}=e.target
    console.log(name);
    console.log(value);
    if(!!value.match(/^[0-9]*$/)){
      if(name=='height'){
        console.log('suxces');
        setHeight(value)
        setIsHeight(true)
      }
      else{
        setWeight(value)
        setIsWeight(true)
      }
    }
    else{
      if(name=='height'){
        setHeight(value)
        setIsHeight(false)
      }
      else{
        setWeight(value)
        setIsWeight(false)
      }

    }
  }

  //function to Reset
  const handleReset=()=>{
    console.log('ees');
    setHeight(0)
    setWeight(0)
    setIsHeight(true)
    setIsWeight(true)
  }

  //function to calculate bmi

  const handleCalculate =()=>{
        let h = height/100
        console.log(h);
        let b = (weight/(h**2))
        //console.log(b);
        let re = (b.toFixed(2));
        setBmi(re)
        setIsN(false)
        setIsO(false)
        setIsOw(false)
        setIsUw(false)
        console.log(bmi) 
        if(re<=18.4){
          setIsUw(true)
        }
        else if(re <=24.9){
          setIsN(true)
        } 
        else if(re <= 29.9){
          setIsOw(true)
        }
        else{
          setIsO(true)
        }
        
  }

  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand text-danger fs-1" href="#"><b><FontAwesomeIcon className='me-3 ms-5' icon={faCalculator} beat />BMI Calculator</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <a className="nav-link active me-3 text-danger" aria-current="page" href="#"><b>Home</b></a>
        <a className="nav-link me-3 text-danger" href="https://www.healthline.com/nutrition/best-diet-plans"><b>Diet Plans</b></a>
        <a className="nav-link me-3 text-danger" href="https://www.youtube.com/playlist?list=PLTE8rfnUzK9hOfd30qz_jdFKJd14SsveJ"><b
        >Videos</b
       ></a>
      </div>
    </div>
  </div>
</nav>
<div className='row mt-5 mx-3 mx-sm-0 d-flex justify-content-center align-items-center'>
  <div className="col-md-4">
    <div className='justify-content-between'>
     <h3 className='text-info'> BMI Calculator</h3><br></br>
     <p>Body Mass Index (BMI) is a person’s weight in kilograms divided by the square of height in meters. A high BMI can indicate high body fatness. BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual.</p>
    </div>
  </div>
  <div className="col-md-6">
    <div className='border shadow m-md-5 p-md-5 m-0 p-0'>
     <h1 className='text-success text-center mb-2'> BMI Calculator</h1>
     <div className="input-group mb-3 mt-4 ">
  <div className="form-floating">
    <input type="text" className="form-control" value={height||""} id="floatingInputGroup1" name='height' placeholder="height" onChange={(e)=>validate(e)}/>
    <label for="floatingInputGroup1">Height</label>
  </div>
  <span className="input-group-text">CM</span>
  </div>
  {!isHeight &&<p className='text-danger'>Invalide Input</p>}

  <div className="input-group mb-3  ">
  <div className="form-floating">
    <input type="text" className="form-control" value={weight||""} id="floatingInputGroup1" name='weight' placeholder="weight" onChange={(e)=>validate(e)}/>
    <label for="floatingInputGroup1">Weight</label>
  </div>
  <span className="input-group-text">KG</span>
  </div>
  { !isWeight &&<p className='text-danger'>Invalide Input</p>}
  <div className='d-flex justify-content-center align-items-center mb-5'>
    <Button variant="success" onClick={handleCalculate} className='w-25 me-2'>Calculate</Button>
        <Button variant="info" className='w-25' onClick={handleReset}>Reset</Button>
  </div>
  <div className='text-center mt-4 mb-3 d-flex align-items-center justify-content-center'>
    { isuw &&
      <div className='border p-3 bg-warning text-light w-75' >
        <h3>Your BMI is</h3>
        <h1>{bmi}</h1>
        <h4 >You are UnderWeight</h4>
      </div>
}
{ isn &&
      <div className='border p-3 bg-success text-light w-75'>
        <h3>Your BMI is</h3>
        <h1>{bmi}</h1>
        <h4 >You are HEALTHY</h4>
      </div>
}
{ isow &&
      <div className='border p-3 text-light w-75' style={{background:'#D35400'}}>
        <h3>Your BMI is</h3>
        <h1>{bmi}</h1>
        <h4 >You are OverWeight</h4>
      </div>
}

{ isO &&
      <div className='border bg-danger p-3 text-light w-75' >
        <h3>Your BMI is</h3>
        <h1>{bmi}</h1>
        <h4 >You are Obese</h4>
      </div>
}
    
    
    
    
  </div>
  <div className='row mt-3 d-flex justify-content-center align-items-center'>
    <div className='bg-warning border m-1 text-light text-center ' style={{width:'25%', height:'50px', fontSize:'15px'}}>Underweight {"<"} 18.5</div>
    <div className='bg-success border m-1 text-light text-center ' style={{width:'25%', height:'50px', fontSize:'15px'}}>Normal 18.5-25</div>
    <div className=' border m-1  text-light text-center'style={{width:'22%', height:'50px', fontSize:'15px',background:'#D35400'}}>Overweight 25-30</div>
    <div className='bg-danger border m-1  text-light text-center' style={{width:'20%', height:'50px', fontSize:'15px'}}>Obese {">"} 30</div>

  </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App
