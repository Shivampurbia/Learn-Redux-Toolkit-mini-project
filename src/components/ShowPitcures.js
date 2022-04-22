import React from 'react'
import {getImages} from '../features/counter/formHandler';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
function ShowPitcures() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loggedIn = useSelector(state=>state.formData.loggedIn);
    const images = useSelector(state=>state.formData.data.data);
    const pending = useSelector(state=>state.formData.data.pending);
   
    useEffect(()=>{
        if(loggedIn===true && (pending === null || pending===false)){
          dispatch(getImages())
        }
      },[])
    console.log('Images',images)

    const showImgDetails = (id) =>{
      navigate(`/products/${id}`)
    }
  
  return (
    <div className='element' style={{display:"flex",marginLeft:"3rem",justifyContent:"center",flexDirection:"row",overflowY:"scroll"}}>
        {pending===false ? images.map((image,index)=>
        <div onClick={(e)=>showImgDetails(image.id)} className='pickgradient'>
            <img  className='imgg' alt='' src={image.image} width={200} height={200}></img>
            <div className='ptag'>₹ {image.price}</div>
        </div>
        )
      :
      <div>Loading....</div>
      }
</div>
  )
}

export default ShowPitcures