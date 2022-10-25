import Navbar from "./components/Navbar";
import React from 'react';
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                
             </div>
       </BrowserRouter>
  );
}

export default App;
