import {BrowserRouter} from 'react-router-dom';
import {RoutesLayoutQuispe} from './components/routes/RoutesLayoutQuispe'
import {NavbarQuispe} from './components/routes/NavbarQuispe'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarQuispe>
          <RoutesLayoutQuispe/>
        </NavbarQuispe>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
