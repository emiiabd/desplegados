import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { obtenerProductosPorId, eliminarProductoPorId } from '../../helpers/productos';
import { useGlobalContext } from '../../Context/GlobalContext';

const Detail = () => {
  /* Retorna un objeto con los parametros de la busqueda */
  const parametros = useParams();
  const {handleDeleteProduct} = useGlobalContext();

  const {
    nombre,
    descripcion,
    precio,
    id,
    stock,
    codigo,
    categoria,
  } = obtenerProductosPorId(parametros.producto_id);

  return ( 
      <div>
      <h1>{nombre}</h1> <br />
      <span>{categoria}</span>  <br />
      <p>{descripcion}</p>  <br />
      <span><b>Precio: </b>${precio}</span> <br />
      <span><b>Unidades disponibles: </b>{stock}</span> <br />
      <button>Comprar</button>
      <button onClick={() => handleDeleteProduct(id)}>Eliminar</button>
    </div>
  );
};

export default Detail;