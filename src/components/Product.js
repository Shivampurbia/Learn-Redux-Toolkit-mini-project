import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { addToBookmark ,emptySimilarProduct} from '../features/counter/formHandler';
import {getSimilarProducts} from '../features/counter/formHandler'
function Product() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    let product = useSelector(state=>state.formData.data.data[id-1]);
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
    const similarProducts = useSelector(state=>state.formData.similarProducts.data);
    console.log(product)
    useEffect(()=>{
        dispatch(getSimilarProducts(product.category))
    },[])
    const addToBookkmarkHandler = ()=>{
        console.log(bookmarks)
        dispatch(addToBookmark([...bookmarks,product]))
        console.log([...bookmarks,product]);
        alert("bookmark added")
    }
    const changeProduct = (item) =>{
     navigate(`/products/${item.id}`)
    }
    const gobackHandler = () =>{
        dispatch(emptySimilarProduct())
        navigate('/dashboard')
    }
  return (
    <div style={{marginTop:"2rem"}}>
        <h1>Product Details</h1>
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
           <button className='btn' onClick={(e)=>{addToBookkmarkHandler()}}>Add to Cart</button>
           <button className='btn' onClick={(e)=>{gobackHandler()}}>Go back</button>
        </div>
        </div>
        </div>
      
     <div>
         <span style={{fontWeight:"bold",marginBottom:"1rem"}}>similar products</span>
         <div>
         {similarProducts.length!== 0 ? similarProducts.map((item,index)=>{
             return <img onClick={(e)=>{changeProduct(item)}} className='thumbnail' alt='' src={item.image} width={80} height={80}></img>
         })
         :
         <div style={{marginTop:"3rem"}}>loading...</div>
        
        }
     </div>
         </div>
       
    </div>
  )
}

export default Product