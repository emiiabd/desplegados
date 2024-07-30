import productos from "../Data/productsData";

const guardarEnLocalStorage = (obj) => localStorage.setItem('products', JSON.stringify(obj));

export const obtenerProductos = () =>{
  const products = JSON.parse(localStorage.getItem('products')) ||  (guardarEnLocalStorage(productos), productos);
  return products
};

export const obtenerProductosPorId = (id) =>{
  const productosGuardados = obtenerProductos();
  return productosGuardados.find(producto => producto.id === id);
};

export const crearProducto = (obj) =>{
  const productosGuardados = obtenerProductos();
  productosGuardados.push(obj);
  return guardarEnLocalStorage(productosGuardados), productosGuardados
};

export const eliminarProductoPorId = (id) =>{
  const productosGuardados = obtenerProductos();
  const newList = productosGuardados.filter((producto) => producto.id !== id)
  return guardarEnLocalStorage(newList), newList
};

/* 
Una funcion que se llame obtenerProductos
Va a llamarla los productos de localStorage, si no estan vaa a cargarlos con la key 'products' y va a rentornalos
Si estan, los parseara y los retornara

Despues:
crearProducto(producto) lo guarda en localStorage con la key 'productos'
obtenerProductorPorId(id) retornar el producto que cumpla con ese id
eliminarProductoPorId(id) elimina el producto que cumpla con ese id
*/

/* 
localStorage: objeto que tiene metodos para guardar y leer datos
.getItem(): obtiene un valor de una clave (key)
.setItem(): setea un valor de una clave (key, value) Value: solo se puede guardar strings, por eso se pasa a JSON
.removeItem(): elimina una clave
.clear(): elimina todo
*/

/* export const obtenerProductos = () => {
  
  const productos_guardados = localStorage.getItem('products');
  
  if(productos_guardados){
    return(JSON.parse(productos_guardados));
    
    } else {
      localStorage.setItem('products', JSON.stringify(productos));
    return(productos);
    }
  } 
  
  export const obtenerProductoPorId = (id) => {
    return productos.find(producto => Number(producto.id) === Number(id));
  }
  */


/* const eliminarProductoPorId = (id) =>{
  const productosGuardados = obtenerProductos();
  const findIndex = productosGuardados.findIndex(producto => Number(producto.id) === Number(id));

  if(findIndex === -1){
    return console.log("No se encontro el producto")
  }else{
    productosGuardados.splice(findIndex,1);
    return guardarEnLocalStorage(productosGuardados)
  }
}
 */
