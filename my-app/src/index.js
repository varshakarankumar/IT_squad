import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import About_Us from './components/About_Us.js'
import Home from './components/Home.js'
import Contact from './components/Contact.js'
import Academics from './components/Academics.js'
import User_manual from './components/User_manual.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import { Routes, Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='components/About_Us' element={<About_Us/>}/>
    <Route path='components/Home' element={<Home/>}/>
    <Route path='components/Contact' element={<Contact/>}/>
    <Route path='components/Academics' element={<Academics/>}/>
    <Route path='components/User_manual' element={<User_manual/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')

);

