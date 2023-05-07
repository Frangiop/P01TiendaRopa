
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationComponentTienda from './components/NavigationComponentTienda/NavigationComponentTienda';
import CarasPage from './pages/CarasPage';
import LabiosPage from './pages/labiosPage';
import OjosPage from './pages/OjosPage';
import PestañasPage from './pages/PestañasPage';
import MasPage from './pages/MasPage';
import MaquillajePage from './pages/MaquillajePage';
import BrillosPage from './pages/BrillosPage';
import SingleLabiosPage from './pages/SingleLabiosPage';
import SingleBrillosPage from './pages/SingleBrillosPage';



function App() {
  return (
    <div className="App">
     <NavigationComponentTienda></NavigationComponentTienda>

     <Routes>
  
  <Route exact path="/caras" element={<CarasPage/>} ></Route> 
  <Route exact path="/labios" element={<LabiosPage/>}></Route> 
  <Route exact path="/ojos" element={<OjosPage/>}></Route>
  <Route exact path="/pestañas" element={<PestañasPage/>}></Route> 
  <Route exact path="/mas" element={<MasPage/>}></Route> 
  <Route exact path="/maquillaje" element={<MaquillajePage/>}></Route>  
  <Route exact path="/brillos" element={<BrillosPage/>}></Route>  
    
  {/* Link páginas únicas */}  
  <Route exact path="/labio/:id" element={<SingleLabiosPage/>} ></Route> 
  <Route exact path="/brillo/:id" element={<SingleBrillosPage/>} ></Route> 

  </Routes>
     

    </div>
  );
}

export default App;
