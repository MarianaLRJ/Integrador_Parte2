import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" >SPA RELAX</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contactos">Contacto</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Alta">Alta</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Más
          </Link>
          <ul class="dropdown-menu">
            <li><Link className="dropdown-item" >Nosotros</Link></li>
            <li><Link className="dropdown-item" >Servicios</Link></li>
            <li><Link className="dropdown-item" >Galeria de fotos</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default navbar