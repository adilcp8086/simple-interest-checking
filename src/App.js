
import './App.css';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {
  const [principle,setPrinciple]=useState(0)
  const [interest,setInterest]=useState(0)
  const [Year,setYear]=useState(0)
  const [result,setResult]=useState(0)
  const [isPrinciple,setisPrinciple]=useState(true)
  const [isInterest,setisInterest]=useState(true)
  const [isYear,setisYear]=useState(true)
  const Calculateintrest=(e)=>{
    e.preventDefault()
    const result=(principle*interest*Year)/100
    setResult(result)
  }
  const handlereset=()=>{
    setPrinciple(0)
    setInterest(0)
    setYear(0)
    setResult(0)
  }
  const validate =(e)=>{
    const{name,value}=e.target;
   
    if(name === 'principlevalue'){
      setPrinciple(value)
      let res =(!!value.match(/^[0-9]+$/));
      if(res === true){
        setisPrinciple(true)
      }
      else{
        setisPrinciple(false)
      }
    }
    else if (name === 'interestField'){
      setInterest(value)
      let res = (!!value.match(/^[0-9]+5/))
      if (res === true){
        setisInterest(true)

      }
      else{
        setisInterest(false)
      }
    }
    else{
      setYear(value)
      let res = (!!value.match(/^[0-9]+$/))
      if (res === true){
        setisYear(true)
      }
      else{
        setisYear(false)
      }
    }
  }
  return (
    <>
    <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{height:"90vh"}}> 
    <div className='bg-light p-5 rounded' style={{width:"500px", }}>
    <h1>Simple Interest</h1>
    <p> Calculating your simple interest easily </p>
    <div style={{height:"150px"}} className="bg-warning mt-3 rounded d-flex justify-content-center align-items-center flex-column ">
    <h2>&#8377;{result}</h2>
    <p>Total simple interest</p>
      </div> 
      <form  className='mt-3'  onSubmit={Calculateintrest}>
      <TextField className ='w-100' id="outlined-basic" label="&#8377;Principle amount" variant="outlined" value={principle}
       name='principlevalue'
       onChange={(e)=>validate(e)}/>
          {
              !isPrinciple &&
              <div className='text-danger'>
                <p>Invalid Input</p>
              </div>
            }
      <TextField className ='w-100 mt-3' id="outlined-basic" label="Rate of interest(p.a)%" variant="outlined"  value={interest}
       name='interestField'
       onChange={(e)=>validate(e)}/>
          {
              !isInterest &&
              <div className='text-danger'>
                <p>Invalid Input</p>
              </div>
            }
       
      <TextField className ='w-100 mt-3' id="outlined-basic" label="Year(yr)" variant="outlined" value={Year}
      name='totalyear'
      onChange={(e)=>validate(e)}/>
          {
              !isYear &&
              <div className='text-danger'>
                <p>Invalid Input</p>
              </div>
            }
      
      
      <Stack direction="row" spacing={2} className='mt-3'>
      <Button disabled={isPrinciple&& isInterest&& isYear?false:true} variant="contained" className='bg-success' style={{height:"50px",width:"200px"}} type='submit'>
        Calculate</Button>
      <Button variant="contained" style={{height:"50px",width:"200px",color:"white"}} onClick={handlereset}>
        Reset</Button>
      </Stack>
      </form>
    </div>
    </div>
    </>
     
  );
}

export default App;
