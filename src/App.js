import Navbar from './componentes/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alta from './Pages/Alta';
import Contactos from './Pages/Contactos';
import {Home} from './Pages/Home';
import Footer from './componentes/Footer';
import { Banner } from './componentes/Banner';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element= {Home}/>
      <Route path='/Contactos'element= {Contactos}/>
      <Route path='/Alta'element= {Alta}/>
    </Routes>
    </BrowserRouter> 
    <Banner/>
    <Footer/>

    
    </div>
  );
}

export default App;
