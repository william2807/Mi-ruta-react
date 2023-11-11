import React from "react";
import CamposFormulario from "./CamposFormulario";
import BotonContinuar from "./BotonContinuar";

const Formulario = () => {
  return (
    <>
      <form className="formulario">
        <CamposFormulario
          descripcion="Nombres"
          type="text"
          htmlFor="nombre"
          placeholder="Ingrese su nombre"
          required={true}
        />
        <CamposFormulario
          descripcion="Apellidos"
          type="text"
          htmlFor="apellidos"
          placeholder="ingrese sus apellidos"
          required={true}
        />
        <CamposFormulario
          descripcion="Documento"
          type="number"
          htmlFor="documento"
          placeholder="ingrese su documento"
          required={true}
        />
        <CamposFormulario
          descripcion="Correo electronico"
          type="email"
          htmlFor="email"
          placeholder="ingrese su correo"
          required={true}
        />
        <CamposFormulario
          descripcion="Tarjeta sitp"
          type="number"
          htmlFor="tarjeta_sitp"
          placeholder="ingrese su tarjeta"
          required={true}
        />
        <CamposFormulario
          descripcion="Telefono"
          type="number"
          htmlFor="telefono"
          placeholder="ingrese su telefono"
          required={true}
        />
        <CamposFormulario
          descripcion="Fecha de nacimiento"
          type="date"
          htmlFor="nacimiento"
          placeholder="indique su fecha de nacimiento"
          required={true}
        />
        <BotonContinuar />
      </form>
    </>
  );
};

export default Formulario;


