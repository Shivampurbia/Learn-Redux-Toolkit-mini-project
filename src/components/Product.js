import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { addToBookmark } from '../features/counter/formHandler';

function Product() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const product = useSelector(state=>state.formData.data.data[id-1]);
    const bookmarks = useSelector(state=>state.formData.bookmarks);
    console.log(product)

    const addToBookkmarkHandler = ()=>{
        console.log(bookmarks)
        dispatch(addToBookmark([...bookmarks,product]))
        console.log([...bookmarks,product]);
        alert("bookmark added")
    }
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
        <img alt='' src={product.image} width={400} height={400} style={{borderRadius:"3rem",marginLeft:"4rem"}}></img>
        <div>
        <br></br>
        <div className='row'>
            <span className='fontt'>Title: </span>
            <span className='fontd'>{product.title}</span>
        </div>
        <br></br>
        <div className='row'>
            <span className='fontt'>Price: </span>
            <span className='fontd'>{product.price}</span>
        </div>
        <br></br>
        <div className='row'>
            <span className='fontt'>Category: </span>
            <span className='fontd'>{product.category}</span>
        </div>
        <br></br>
         <div className='row'>
            <span className='fontt'>Description: </span>
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