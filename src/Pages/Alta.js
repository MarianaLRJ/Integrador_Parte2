import React from 'react'

 export const Alta = () => {
  return (
    <center>
      <div className='container' style={{width:"60%", marginTop:"20", background:"#CACACC", padding:"20"}}>
        <form id="Formulario">
          <h1 className='h1'>
          Bienvenido a la página de registro
          </h1>
          <input style={{marginBottom:20}} className= "form-control form-control-lg"  type="text" placeholder='Nombre'required/>
          <input style={{marginBottom:20}}  className= "form-control form-control-lg" type="number" placeholder='Precio' required/>
          <input style={{marginBottom:20}} className= "form-control form-control-lg"  type="text" placeholder='Marca'/>
          <input style={{marginBottom:20}}  className= "form-control form-control-lg" type="text" placeholder='Categoría'/>
          <textarea style={{marginBottom:20}}  className= "form-control form-control-lg" placeholder='Descripción corta' required/>
          <textarea style={{marginBottom:20}}  className= "form-control form-control-lg" placeholder='Descripción larga' required/>
          <input style={{marginBottom:20}} className= "form-control form-control-lg"  type="number" placeholder='Edad desde'required/>
          <textarea style={{marginBottom:20}}  className= "form-control form-control-lg" type="number"  placeholder='Edad hasta' required/>
          <textarea style={{marginBottom:20}}  className= "form-control form-control-lg" type=""  placeholder='Foto' required/>
          <button className='btn btn-primary btn-lg' type='submit'> Enviar</button>
        </form>
         </div>
    </center>
  )
}

export default Alta