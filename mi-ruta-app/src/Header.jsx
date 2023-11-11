import React from "react";
import logotipoPequeño from './logotipoPequeño.png';  

const Encabezado = (props) => {

    return (
        <main className="contenido-registro">
            <section className="informacion-registro">
                <h1><img className="logotipo" src={logotipoPequeño} alt="imagen de logo" /></h1>
                <h2>{props.Titulo}</h2>
                {/* se usa para poder reutilzar por medio de la propiedad */}
            </section>
        </main>
    );
}

export default Encabezado;