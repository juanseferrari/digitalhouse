import React from 'react'

function Pelicula(props) {
    return (
        <div>
            <h2>Titulo de la pelicula!</h2>
            <p>Rating {props.rating}</p>
            <ul>
                {props.generos.map( (genero,i) => <li key={genero + i}>{genero} </li>)}
            </ul>
        </div>
       
    );
  }

  Pelicula.defaultProps = {
      generos: ["PRUEBAA"]
  }

export default Pelicula