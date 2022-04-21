import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getImages = createAsyncThunk('getuserimg/data', async()=>{
  console.log('entering the function...')
  const response = await axios
  .get("https://fakestoreapi.com/products")
  .catch((err) => {
    console.log("Err: ", err);
  });
  console.log(response)
  return response.data
})

const initialStateOfForm = {
  value:{
    name:"",
    email:"",
    phone:"",
    address:""
  },
  data:{
    data:[],
    pending:null,
    error:false
  },
  bookmarks:[],
  loggedIn:false,
  status:"idle",

}
export const formHandler = createSlice({  
  name:'formData',
  initialState:initialStateOfForm,
  reducers:{
    submitData:(state,action)=>{
      state.value = action.payload 
    },
    emptyData:(state)=>{
      state.data.data = []
    },
    loginHandler:(state,action)=>{
      state.loggedIn = action.payload
    },
    addToBookmark:(state,action)=>{
      console.log(action.payload)
      state.bookmarks = action.payload
    }
  },

  extraReducers:{
    [getImages.pending]:(state)=>{
      state.data.pending = true;
      state.data.error = false;
    },
    [getImages.fulfilled]:(state,action)=>{
      state.data.pending = false;
      state.data.data = action.payload;
    },
    [getImages.rejected]:(state)=>{
      state.data.pending = false;
      state.data.error = true;
    }

  }
})

export const {addToBookmark,emptyData, submitData,loginHandler } = formHandler.actions;
export default formHandler.reducer;
