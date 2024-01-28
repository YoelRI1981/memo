import React, { useState } from "react";

const Planeta = ({ planet, jugadas, actualizar }) => {
  const [reverso, setReverso] = useState();
const [resuelto, setResuelto] = useState(false);
  

  
  
  const upCard = () => {
    jugadas.push({name: planet.name});
    console.log(jugadas);
    
    if (jugadas.length === 2) {
      if (jugadas[0].name === jugadas[1].name) {
        setResuelto(!resuelto);
      }
   
    }
    
    setReverso(!reverso);
  }; 
  if (resuelto) {
    return (
      <img
        className="planeta"
        src="http://localhost:3000/fotos/tick.svg"
        alt="imagenes"
      />
    );
  }
  if (reverso) {
    return (
      <img
        className="planeta"
        onClick={upCard}
        src={planet.img}
        alt="imagenes"
      />
    );
  }

  return (
    <img
      onClick={upCard}
      src="http://localhost:3000/fotos/universe.svg"
      alt="imagen"
    />
  );
};


export default Planeta;
