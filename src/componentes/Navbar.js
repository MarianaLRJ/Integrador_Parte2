import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  const buscar = () => {
    alert("Buscando...");
}
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/Login">LOGIN</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Servicios">Servicios</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contactos">Contacto</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Alta">Alta</Link>
        </li>

        <li className="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Más
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" >Nosotros</Link></li>
            <li><Link className="dropdown-item" >Galeria de fotos</Link></li>
          </ul>
        </li>
      </ul>
      <li>
      <Link to="/Carrito">
      <i class=" bi-cart-check-fill">
         Carrito                      
      </i>
      </Link>
      </li>
      <input className="buscar" type="search" id="search" name="search" />
      <button onClick={buscar} className="boton">Buscar</button>
    </div>
  </div>
</nav>
    </>
  )
}

export default navbar