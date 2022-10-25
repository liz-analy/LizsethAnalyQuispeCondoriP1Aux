import {BrowserRouter} from 'react-router-dom';
import {RoutesLayoutQuispe} from './components/routes/RoutesLayoutQuispe'
import {NavbarQuispe} from './components/routes/NavbarQuispe'
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
          <RoutesLayoutQuispe/>
       
        
      </BrowserRouter>
    </div>
  );
}

export default App;
