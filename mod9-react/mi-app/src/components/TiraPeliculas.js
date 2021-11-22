import React from 'react'
import Pelicula from './Pelicula';

function TiraPeliculas() {
    const usuarios = ["juanse", "pedro"]
    return (
        <div>
            <Pelicula generos={["Accion", "Aventura"]} rating="10" />
            <Pelicula generos={["Drama", "AAAA", "Miedo"]} rating="0.9" />
            <Pelicula generos={["Suspenso", "Aventura"]} rating="9.1" />
            <Pelicula  rating="101" />

        </div>
    );
  }

export default TiraPeliculas