import Navbar from './componentes/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alta from './Pages/Alta';
import Contactos from './Pages/Contactos';
import {Home} from './Pages/Home';
import Footer from './componentes/Footer';
import Servicios from './Pages/Servicios';
import Login from './Pages/Login';
import Carrito from './Carrito/Carrito';


function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/'element= {<Home/>}/>
      <Route exact path='/home'element= {<Home/>}/>
      <Route exact path='/servicios'element= {<Servicios/>}/>
      <Route exact path='/contactos'element= {<Contactos/>}/>
      <Route exact path='/alta'element= {<Alta/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/carrito' element={<Carrito />} />
    </Routes>
    </BrowserRouter> 
  
    <Footer/>
    
      
    
    </div>
  );
}

export default App;
