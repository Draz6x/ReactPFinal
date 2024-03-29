import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../Context/CarritoContext';
import {useContext} from 'react';


const ItemDetail = ({id, nombre, stock,  precio, img}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    
    const item= {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
   
  }
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precios: {precio}</h3>
        <p>ID: {id}</p>
        <p>Stock: {stock}</p>
        <p>Una Bebida alcoholica en todo su esplendor, producto solo para mayores de 18 años, consuma con moderación, si va a manejar, entregue las llaves.  </p>
        <img src= {img} alt={nombre} />
        { 
        agregarCantidad> 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<ItemCount incial = {1} stock = {stock} funcionAgregar = {manejadorCantidad} />)
      }
    </div>
  )
  }


export default ItemDetail