import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import formHandlerReducer from '../features/counter/formHandler';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    formData: formHandlerReducer
  },
});
