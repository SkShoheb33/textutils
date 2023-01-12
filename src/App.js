// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
import React from "react";
function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);


  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setInterval(()=>{
      setAlert(null);
    },2000);
  }


  const toggle = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor ="black"
      showAlert("Enable to dark mode","success");
      document.title = "darkMode Enabled"
    }else{
      setMode("light");
      document.body.style.backgroundColor ="white"
      showAlert("Enable to light mode","success");
      document.title = "lightMode Enabled"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode ={mode} toggle={toggle} />
      <Alert alert={alert}/>
      <div className="container my-3">
            {/* <About/> */}
            <TextFrom  mode={mode} showAlert={showAlert} />
      </div>
      </>
  );
}

export default App;