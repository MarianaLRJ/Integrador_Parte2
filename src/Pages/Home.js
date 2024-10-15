import React from 'react'
import image1 from '../images/02-4.jpg'
import image2 from '../images/117608689-fcu-spa-5500x4126-wide_wide.jpg'
import spa1 from '../images/spa.jpg'



export const Home = () => {
  return (
    <>
    

        <div className='container' style={{marginTop:20, marginBottom:20}} >
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block w-100 h-80" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={spa1} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
    </div>
    <h1 className='text-center '>
Elige entre nuestras promos del MES DE LA MADRE!!!
</h1>
 
<div className='container'>
<div className='row gy-3'>
<div className='col-md-4'>
<div className="card" >
  <img src="https://http2.mlstatic.com/D_NQ_NP_2X_765700-MLA76522337325_052024-T.webp" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="./Alta.js" className="btn btn-primary">Comprar</a>
  </div>
</div>
</div>
<div className='col-md-4'>
<div className="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePry-p8FhSB4Cmff_mkP1Mf4WiqCJhQpBOw&s" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="./Alta.js" className="btn btn-primary">Comprar</a>
  </div>
</div>
</div>
<div className='col-md-4'>
<div className="card" >
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5pnrhyAqjCOKthz0yN4GD8cSqbsBC-OPVw&s" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Comprar</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="./Alta.js" className="btn btn-primary">Comprar</a>
  </div>
</div>
</div>
</div>
</div>
</>
)
    
   
}