export const obtenerCarrito = () =>{
  const carrito = localStorage.getItem('cart')
  if(carrito){
    return JSON.parse(carrito);
  }
  else{
    localStorage.setItem( 'cart' , JSON.stringify([]));
    return [];
  };
};

export const guardarCarrito = (carrito) =>{
  localStorage.setItem('cart', JSON.stringify(carrito))
}