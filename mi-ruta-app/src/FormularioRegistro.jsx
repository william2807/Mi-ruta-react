import React from "react";
import CamposFormulario from "./CamposFormulario";
import BotonContinuar from "./BotonContinuar";

const FormularioRegistro = () => {


  return (
    <>
    <body>
      <form className="formulario">
        <CamposFormulario
            descripcion = "Usuario"
            type = "text"
            htmlFor = "usuario"
            placeholder = "Ingrese su usuario"
            required = {true}
        />
        <CamposFormulario
            descripcion = "Contraseña"
            type = "password"
            htmlFor = "contraseña"
            placeholder = "Ingrese su contraseña"
            required = {true}
        />
        <BotonContinuar/>
      </form>
    </body>
    </>
  )
}

export default FormularioRegistro;