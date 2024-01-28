import React, { useState } from 'react'
import Planeta from './Planeta';
import "../components/Gallery.css"

const Gallery = ({ imagen }) => {
  const [jugadas, setJugadas] = useState([]);
  return (
    <div className="car">
      {imagen.map((item, index) => (
        <div className="planeta" key={index}>
          <Planeta planet={item} jugadas={jugadas} actualizar = {setJugadas}></Planeta>
        </div>
      ))}
    </div>
  );
}; 
           

export default Gallery;
