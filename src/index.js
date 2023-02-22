import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import './global.css';
import Details from './Pages/Details';
import Home from './Pages/Home/Index';
import Favorites from './Pages/Favorites';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<Details/>} />
      <Route path='/Favorites' element={<Favorites/>} />
    </Routes>
  </BrowserRouter>
);
