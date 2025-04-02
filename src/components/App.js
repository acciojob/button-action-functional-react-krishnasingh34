import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
 const [para, setPara] = useState('')
  return (
    <div id="main">
      <button id='click' onClick={()=> {
        setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
      }}>Submit</button>
      {para && <p id='para'>{para}</p>} 
    </div>
  );
}


export default App;
