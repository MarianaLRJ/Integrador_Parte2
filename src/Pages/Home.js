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
</>
)
    
   
}