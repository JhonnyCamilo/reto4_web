import React from 'react';
import { Link } from 'react-router-dom';

const Productos = () => {
       return( 
        <>
         <h1 className="text-3xl font-light mb-4">Productos</h1>
            <Link to="/nuevo-producto" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Producto
            </Link>
        </>
     );
}
 
export default Productos;