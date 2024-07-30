import React, { useState } from 'react';
import { useGlobalContext } from '../../Context/GlobalContext';

export const ProductNew = () => {
  /* const formSchema = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    codigo: '',
    categoria: '',
    thumbnail: '',
  };

  const {products,handleSubmit} = useGlobalContext();

  const initialState = {...formSchema, id: products.length + 10};
  const formInputs = [];
  
  const [formValues, setFormValues] = useState(initialState);

  const handleChangeOnValue = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  };

  for(const prop in formSchema){
    formInputs.push( 
    <div key={prop}> 
      <label htmlFor={prop}> {prop.toUpperCase()}: </label>
      <input type="text" id={prop} name={prop} required onChange={handleChangeOnValue}/> 
    </div> );
  };
  */

  const initialState = {categoria: ''};
  const {handleCreateProduct} = useGlobalContext();

  const [formValues, setFormValues] = useState(initialState);

  const handleChangeOnValue = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  };

  const CATEGORIAS_DISP = [
    'tecnologia',
    'hogar',
    'deporte',
  ]


  return (
    <div>
      <form onSubmit={(e) => handleCreateProduct(e)}>
        <h1>Ingresar un producto</h1>
        <div> 
          <label htmlFor='nombre'> Nombre del producto </label>
          <input type="text" id='nombre' name='nombre' onChange={handleChangeOnValue}/> 
        </div>
        <div> 
          <label htmlFor='descripcion'> Descripcion </label>
          <input type="textArea" id='descripcion' name='descripcion' onChange={handleChangeOnValue}/> 
        </div>
        <div> 
          <label htmlFor='precio'> Precio </label>
          <input type="number" id='precio' name='precio' onChange={handleChangeOnValue}/> 
        </div>
        <div> 
          <label htmlFor='stock'> Stock </label>
          <input type="number" id='stock' name='stock' onChange={handleChangeOnValue}/> 
        </div>
        <div> 
          <label htmlFor='codigo'> Codigo </label>
          <input type="number" id='codigo' name='codigo' onChange={handleChangeOnValue}/> 
        </div>
        <div> 
          <label htmlFor='categoria'> Categoria </label>
          <select id='categoria' name='categoria' onChange={handleChangeOnValue} value={formValues.categoria}>
            <option value="">No Seleccionado</option>
            {
              CATEGORIAS_DISP.map((cat, index) => <option key={cat + index} value={cat} >{cat}</option>)
            }
          </select>
        </div>
        <div> 
          <label htmlFor='thumbnail'> Direccion de imagen </label>
          <input type="text" id='thumbnail' name='thumbnail' onChange={handleChangeOnValue}/> 
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
