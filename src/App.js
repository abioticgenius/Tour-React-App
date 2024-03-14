import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { useState } from 'react';
import Cardcontainer from './components/Cardcontainer';
import Card from './components/Card';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">

      <Header />
      <Home />
      <ToastContainer position='top-right' />

    </div>
  );

  
}


export default App;