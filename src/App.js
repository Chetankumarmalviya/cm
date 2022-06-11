import Navbar from './component/Navbar';
import Textform from './component/Textform'
// import './App.css';
import React, { useState } from 'react'
import Alert from './component/Alert';
import About from './component/About';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {
  const [theme, settheme] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setInterval(() => {
      setAlert(null);
    }, 3000);
  }
  const mode = () => {
    if (theme === 'light') {
      settheme('dark');
      document.body.style.backgroundColor = "aqua";
      showAlert(" Dark mode Enabled", "success");
      document.title = "TextUtil-Dark mode";
    } else {
      settheme('light');
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode Enabled", "success");
      document.title = "TextUtil-Light mode";
    }

  }
  return (
    <>
      {/* <Router> */}
        <Navbar about="about" theme={theme} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />}>
            </Route> */}
            {/* <Route path="/" element={<Textform show="Enter some text" showAlert={showAlert} />}>
            </Route> */}
            <Textform show="Enter some text" showAlert={showAlert} />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
