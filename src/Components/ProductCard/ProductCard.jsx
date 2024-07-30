import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({producto}) => {
  const {
    nombre,
    descripcion,
    precio,
    id,
    stock,
    codigo,
    categoria,
  } = producto;

  
  return (
    <div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <span><b>Stock: </b> {stock}</span>
      <Link to={`/detail/${id}`}>Ver detalles</Link>
    </div>
  );
};

export default ProductCard;