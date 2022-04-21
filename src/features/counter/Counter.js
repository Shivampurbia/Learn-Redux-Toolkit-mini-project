import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  
} from './counterSlice';
import {
  submitData,
  formData,
  loginHandler
} from './formHandler'
import styles from './Counter.module.css';

export function Counter() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;
  

 
  const nameValue = useSelector(state=>state.formData);
  const [form,setForm] = useState({
    name:nameValue.value.name,
    email:nameValue.value.email,
    phone:nameValue.value.phone,
    address:nameValue.value.address
  })
  const formDataHandler = (e) =>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const submitHandler = () =>{
    dispatch(submitData(form))
    dispatch(loginHandler(true))
    navigate('/dashboard')
  }

  console.log(nameValue);

  return (
    <div className='box'>
      <h1>Welcome to our app</h1>
      <div>
        <form onSubmit={submitHandler}>
          <input className='inputst' required name='name' type='text' placeholder="enter something..." value={form.name} onChange={(e)=>{formDataHandler(e)}}></input>
          <br></br>
          <input className='inputst' required type='email' name='email' placeholder="enter something..." value={form.email} onChange={(e)=>{formDataHandler(e)}}></input>
          <br></br>
          <input className='inputst' required type='number' name='phone' minLength={12} placeholder="enter something..." value={form.phone} onChange={(e)=>{formDataHandler(e)}}></input>
          <br></br>
          <input className='inputst' required type='text' name='address' placeholder="enter something..." value={form.address} onChange={(e)=>{formDataHandler(e)}}></input>
          <br></br>
            <input className='btn' type='submit' value='next'></input>
        </form>
       
      </div>
    </div>
  );
}
