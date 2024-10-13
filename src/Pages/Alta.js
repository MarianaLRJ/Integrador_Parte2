import React from 'react'

 export const Contactos = () => {
  return (
    <center>
      <div className='container' style={{width:"60%", marginTop:"20", background:"#CACACC", padding:"20"}}>
        <form id="Formulario">
          <h1 className='h1'>
          Dejanos un mensaje
          </h1>
          <input style={{marginBottom:20}} className= "form-control form-control-lg"  type="text" placeholder='Nombre y Apellido'required/>
          <input style={{marginBottom:20}}  className= "form-control form-control-lg" type="email" placeholder='E-mail' required/>
          <input style={{marginBottom:20}} className= "form-control form-control-lg"  type="text" placeholder='Nombre y Apellido'required/>
          <input style={{marginBottom:20}}  className= "form-control form-control-lg" type="email" placeholder='E-mail' required/>
          <input style={{marginBottom:20}} className= "form-control form-control-lg"  type="text" placeholder='Nombre y Apellido'required/>
          <input style={{marginBottom:20}}  className= "form-control form-control-lg" type="email" placeholder='E-mail' required/>
          <textarea style={{marginBottom:20}}  className= "form-control form-control-lg" placeholder='Comentario' required/>
          <button className='btn btn-primary btn-lg'> Enviar</button>
        </form>
         </div>
    </center>
  )
}

export default Contactos