import React from 'react';
import imagen4 from '../images/Masaje-facial.jpg';
const Servicios = () => {

  
    const carrito = () => {

        alert("Producto agregado al carrito");
        
        const producto = {
            nombre: 'Face-Spa',
            precio: 10000,
            descripcion: 'Masaje facial más corporal, con aceites puros escenciales',
            img: {imagen4},
           

            
        }
        
        
        
        localStorage.setItem('producto', JSON.stringify(producto));
       
 
    }


    return (
      <>
      
      <h1 className='text-center '>
  Regalale alguna de nuestras promos a MAMÁ en su día!!!
  </h1>
   
  <div className='container'>
  <div className='row h-20 overflow-hidden'>
  <div className='col-li col-md-4 col-lg-m3 mx-0 mb-4'>
  <div className="card" >
    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_765700-MLA76522337325_052024-T.webp" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-titulo">FACE SPA</h5>
      <p className="card-Descripcion">-Masaje facial + corporal, con aceites puros escenciales organicos -</p>
      <h3 className="card-Precio">Promo mes de la madre a $10.000</h3>
      <button onClick={carrito} className= "btn btn-primary" href="./Alta.js" > Adherir al carrito</button>
    </div>
  </div>
  </div>
  <div className='col-md-4'>
  <div className="card" >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePry-p8FhSB4Cmff_mkP1Mf4WiqCJhQpBOw&s" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-titulo">FULL DAY</h5>
      <p className="card-Descripcion">-Circuito completo, ideal para pasar un dia a puro relax! INCLUYE MERIENDA-</p>
      <h3 className="card-Precio">Circuito completo: $70.000</h3>
      <button onClick={carrito}  className= "btn btn-primary" href="./Alta.js" > Adherir al carrito</button>
    </div>
  </div>
  </div>
  <div className='col-md-4'>
  <div className="card" >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5pnrhyAqjCOKthz0yN4GD8cSqbsBC-OPVw&s" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-titulo">CIRCUITO HÍDRICO</h5>
      <p className="card-Descripcion">-Piletas de agua termal 100% mineralizadas que brindan confort a todo el cuerpo-</p>
      <h3 className="card-Precio"> Sólo octubre a $45.000</h3>
      <button onClick={carrito} className= "btn btn-primary" href="./Alta.js" > Adherir al carrito</button>
    </div>
  </div>
  </div>
  </div>
  </div>
  
  </>
  )    
  }
  export default Servicios