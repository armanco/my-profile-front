import React from 'react';
import './App.css';
import Navbar from "./component/Navbar";
import Main from "./component/Main";

function App() {
  return (
      <div dir='rtl' style={{textAlign: 'right'}}>
        <Navbar/>
        <Main/>
      </div>

  );
}

export default App;
