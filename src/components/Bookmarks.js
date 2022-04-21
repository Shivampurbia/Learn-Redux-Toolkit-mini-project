import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

function Bookmarks() {
    const bookmarks = useSelector(state=>state.formData.bookmarks);
    const navigate = useNavigate();
  return (
    <div style={{marginTop:"1rem"}} >
        <span style={{fontWeight:"bold"}}>total bookmarks:{bookmarks.length}</span>
        <div className='card-parent'>
            {bookmarks!==[] ?
            bookmarks.map((bookmark,index)=>{
            return( 
            <div  className='card'>
                <div className='card-in'>
                    <div  style={{display:"flex",flexDirection:"column"}}>
                        <span className='card-item'>{bookmark.title}</span>
                        <span>{bookmark.category}</span>
                        <span>{bookmark.price}</span>
                    </div>
                    <img alt='' width={60} className='imgg2' src={bookmark.image}></img>
                </div>
               
                
               
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