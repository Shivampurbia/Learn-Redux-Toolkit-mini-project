import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { emptyData,submitData,loginHandler} from '../features/counter/formHandler';
import {useSelector,useDispatch} from 'react-redux';
import ShowPitcures from './ShowPitcures';
function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const name = useSelector(state=>state.formData.value.name);
  const state = useSelector(state=>state)
  console.log(state,'state')
  // console.log(formDataa);
  const logoutHandler = () =>{
    dispatch(submitData({}))
    dispatch(emptyData())
    dispatch(loginHandler(false))
    navigate('/')
  }
  const openBookmarks = () =>{
    navigate('/bookmarks')
  }
  return (
    <div>
      <h1>Welcome, {name}</h1>
      <div>
        <ShowPitcures></ShowPitcures>
      </div>
      <div>
        {/* <button className='btn' onClick={(e)=>{navigate(-1)}}>Back</button> */}
        <button className='btn2' onClick={logoutHandler}>Logout</button>
      </div>
      <div onClick={openBookmarks} className='bkmrk'>Bookmarks</div>
    </div>
  )
}

export default Dashboard