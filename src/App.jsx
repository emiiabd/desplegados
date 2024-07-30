import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Home, Cart, Detail, ProductNew, Login, NotFound, Reviews } from './Pages';

function App() {

  return (
    <>
    <Routes>{/* Se utiliza esta utilidad para definir las rutas dentro de tu pag Web, lo bueno de esta util. es que no recarga la pagina evitando recargar el css o el js*/}
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/detail/:producto_id" element={<Detail/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/product/new" element={<ProductNew/>} />
      <Route path="/*" element={<NotFound/>} />
      <Route path='/reviews' element={<Reviews/>} />
    </Routes>

    </>
  );
};

export default App;
