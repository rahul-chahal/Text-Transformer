
import './App.css';
import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom'
// import Switchbutton from './components/Switchbutton';
import Textform from './components/Textform';
import About from './components/About';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import {
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setTo] = useState("light")
  // eslint-disable-next-line 
  const [alert, alertState] = useState(null)

  const showAlert = (mssg) => {
    alertState(mssg)
    setTimeout(() => {
      alertState(null)
    }, 1000);
  }

  const modeSwitch = () => {
    if (mode === 'light') {
      setTo('dark')
      showAlert("dark mode enabled")
      document.title = "dark mode"

    }
    else if (mode === 'dark') {
      setTo('light')
      showAlert("light mode enabled")
      document.title = "light mode"
    };
  }
  return (
    <>
      <HashRouter>
      {/* <BrowserRouter> */}

        {/* <Switchbutton mode={mode} modeSwitch={modeSwitch}/> */}
        <Navbar mode={mode} modeSwitch={modeSwitch} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Textform" element={<Textform />} />
        </Routes>
      {/* </BrowserRouter> */}

      </HashRouter>
    </>
  )
}

export default App;
