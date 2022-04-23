import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Product from './components/Product';
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Bookmarks from './components/Bookmarks';
function App() {
  return (
    <div className="App">
      <header>
        {/* <img  style={{objectFit:"cover"}} src='https://cdn-icons.flaticon.com/png/512/2954/premium/2954904.png?token=exp=1650547763~hmac=b73ed94a5bb38542122659ae5ef72d7a' className="App-logo" alt="logo" />        */}
        <BrowserRouter>
      <Routes>
          <Route path='/' element={<Counter/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/products/:id' element={<Product/>}></Route>
          <Route path='/bookmarks' element={<Bookmarks/>}></Route>
    
      </Routes>
      </BrowserRouter>
      </header>
    
    </div>
  );
}

export default App;
