import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(32,31,31)'
      showAlert('Dark mode has enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has enabled', 'success')
    }
  }

  return (
      <Router>
        <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
        <Route exact path="/about" element={<About mode ={mode} />} />
        <Route exact path="/" element={ <Textform heading="Enter the text to analyze" mode={mode}/>}/>
        </Routes>
        </div>
      </Router>
  );
}

export default App;
