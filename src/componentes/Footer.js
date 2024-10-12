import React from 'react'

export const footer= () => {
  return (
    <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="../App.js" className="nav-link px-2 text-body-secondary">Home</a></li>
        <li className="nav-item"><a href="../Pages/Contactos.js" className="nav-link px-2 text-body-secondary">Contactos</a></li>
        <li className="nav-item"><a href="../Pages/Home.js" className="nav-link px-2 text-body-secondary">Nosotros</a></li>
        <li className="nav-item"><a href="../Pages/Alta.js" className="nav-link px-2 text-body-secondary">Servicios</a></li>
      </ul>
      <p class="text-center text-body-secondary">&copy; Creado por Company 2024, Inc</p>
    </footer>
  </div>
  )
}

export default footer