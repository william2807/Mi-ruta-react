import React from "react";
import { useForm } from "react-hook-form";

const CamposFormulario= (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Manejar la lógica de envío del formulario aquí
    console.log(data);
  };

  return (
    <>
      <div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor={props.htmlFor}>{props.descripcion}</label>
          <input
            type={props.type}
            id={props.htmlFor}
            className="input-padron"
            {...register(props.htmlFor)}
            required = {props.required}
            placeholder = {props.placeholder}
          />
        </form>
      </div>
    </>
  );
};

export default CamposFormulario;