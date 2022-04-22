import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { addToBookmark } from '../features/counter/formHandler';

function Product() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const product = useSelector(state=>state.formData.data.data[id-1]);
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
    console.log(product)

    const addToBookkmarkHandler = ()=>{
        console.log(bookmarks)
        dispatch(addToBookmark([...bookmarks,product]))
        console.log([...bookmarks,product]);
        alert("bookmark added")
    }
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:"40%"}}>
        <img alt='' src={product.image} width={400} height={400} style={{borderRadius:"3rem",marginLeft:"4rem"}}></img>

        </div>
        <div style={{width:"60%"}}>
        <br></br>
        <div className='row'>
            <div className='fontt'>Title: </div>
            <span className='fontd'>{product.title}</span>
        </div>
        <br></br>
        <div className='row'>
            <div className='fontt'>Price: </div>
            <span className='fontd'>{product.price}</span>
        </div>
        <br></br>
        <div className='row'>
            <div className='fontt'>Category: </div>
            <span className='fontd'>{product.category}</span>
        </div>
        <br></br>
         <div className='row'>
            <div className='fontt'>Description: </div>
            <span className='fontd'>{product.description}</span>
        </div>
        <div>
           <button className='btn' onClick={(e)=>{addToBookkmarkHandler()}}>Add bookmark</button>
           <button className='btn' onClick={(e)=>navigate('/dashboard')}>Go back</button>
        </div>
        </div>
     
    </div>
  )
}

export default Product