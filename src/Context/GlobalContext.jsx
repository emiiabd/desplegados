import { createContext, useContext, useEffect, useState } from "react";
import { eliminarProductoPorId, obtenerProductos, crearProducto } from "../helpers/productos";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid';
import { guardarCarrito, obtenerCarrito } from "../helpers/cart";

const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) =>{
  const [products,  setProducts] = useState(obtenerProductos());

  const[searchTerm, setSearchTerm] = useState('')

  const handleChangeSearchTerm = (e) =>{
    setSearchTerm('chau')
    setSearchTerm((prevState) => prevState + 'hola')
  }

  const [carrito, setCarrito] = useState(obtenerCarrito())
  const navigate = useNavigate();

  useEffect(() => {
    const ProductList = obtenerProductos();
    if(searchTerm !== ''){
      const newProductList = ProductList.filter(product => product.nombre.toLowerCase().includes(searchTerm.toLowerCase()));
      setProducts(newProductList);
    }else{
      setProducts(ProductList);
    }

  }, [searchTerm]);

  const handleDeleteProduct = (id) =>{
    setProducts(eliminarProductoPorId(id));
    navigate('/');
  };

  const handleSubmit = (e, obj) =>{
    e.preventDefault();
    setProducts(crearProducto(obj));
    navigate('/');
  };

  const handleCreateProduct = (e) =>{
    e.preventDefault()
    console.log('producto Creado')
    const formulario = e.target
    const formularioValores = new FormData(formulario)

    const newForm = {
      nombre: '',
      descripcion: '',
      precio: 0,
      stock: 0,
      codigo: 0,
      categoria: '',
      thumbnail: '',
    }

    for(const propiedad in newForm){
      newForm[propiedad] = formularioValores.get(propiedad)
    }
    
    /* const precio = formularioValores.get('precio')
    const descripcion = formularioValores.get('descripcion') */
    newForm.id = uuid();

    setProducts(crearProducto(newForm))
    navigate('/');
  }

  /* const agregarProductoCarrito = (producto) =>{
    setCarrito([...carrito, producto]);
    // HACER EN USE EFFECT 
    guardarCarrito(...carrito)
  } */

  const getUserData = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user
}

const logout = () => {
    localStorage.removeItem('user')
    navigate('/login')
}

  return(
    <GlobalContext.Provider value={
      {products: products, 
      handleDeleteProduct: handleDeleteProduct, 
      handleSubmit: handleSubmit, 
      logout: logout, 
      getUserData: getUserData,
      handleCreateProduct: handleCreateProduct,
      carrito: carrito,
      handleChangeSearchTerm,
      searchTerm,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);