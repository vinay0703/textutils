import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react'
import {BrowserRouter as Router,  Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#444444';
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About mode = {mode}/>
          </Route>
          <Route path="/">
            <TextForm heading="Enter text below to analyze" mode={mode} showAlert = {showAlert}/>
          </Route>
        </Switch>
      </div>
      <Footer mode = {mode}/>
    </Router>
    </>
  );
}

export default App;
