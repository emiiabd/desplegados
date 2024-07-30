import React from 'react';
import { Link } from 'react-router-dom';
import {ProductList} from '../../Components';
import { useGlobalContext } from '../../Context/GlobalContext';
import './home.css';

const Home = () => {

  const {products, getUserData, logout, handleChangeSearchTerm, searchTerm} = useGlobalContext()
  const user = getUserData()

  return (
    <div>
      {
        user 
        ?
        <button onClick={logout}> Cerrar sesion </button>
        :
        <Link to={'/login'}> Login </Link>
      }
      {
        (user && user.role === 'admin') 
        &&
        <>
          <Link to={'/product/new'}> Crear producto </Link>
          <Link to={'/cart'}> Carrito </Link>
        </>
      }
      {
        (user && user.role === 'user') 
        &&
        <>
          <Link to={'/cart'}>Carrito</Link>
        </>
      }
      <div className="imgContainer">
        <img src="../../imagenes/Juan.jpg" alt="" />
      </div>

      <br />
      <h1>Elige nuestros productos</h1>
      <input type="text" onChange={handleChangeSearchTerm} value={searchTerm} placeholder="Buscar" />
      <ProductList productos={products}/>
    </div>
  );
};

export default Home;