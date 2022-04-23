import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { removeBookmark } from '../features/counter/formHandler';
function Bookmarks() {
    const [refresh,setRefresh] =useState(0)
    const dispatch = useDispatch()
    let bookmarks =  JSON.parse(localStorage.getItem("bookmarks"))
    useEffect(()=>{
        console.log('refreshed')
    },[refresh])
    
    const navigate = useNavigate();

    const removeBookmarkHandler = (bookmark) =>{
        console.log("deleted bookmark");
        dispatch(removeBookmark(bookmark))
        setRefresh(refresh+1)
    }
  return (
    <div style={{marginTop:"1rem"}} >
        <span style={{fontWeight:"bold"}}>total items:{bookmarks.length}</span>
        <div className='card-parent'>
            {bookmarks!==[] ?
            bookmarks.map((bookmark,index)=>{
            return( 
            <div key={index} className='card'>
                <div className='card-in'>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <span className='card-item'>{bookmark.title}</span>
                        <span>{bookmark.category}</span>
                        <span style={{color:"green",fontWeight:"bold"}}>₹ {bookmark.price}</span>
                    </div>
                    <img alt='' width={60} height={60} className='imgg2' src={bookmark.image}></img>
                </div>
                <button onClick={(e)=>{removeBookmarkHandler(index+1)}} className='delbtn'>Remove </button>
               
                
               
            </div>
            )
}):
<div>No bookmarks</div>
            }
        </div>
        <div className='bkmrk' onClick={(e)=>navigate('/dashboard')}>Back</div>
    </div>
  )
}

export default Bookmarks