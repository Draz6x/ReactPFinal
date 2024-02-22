import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precios: {precio}</h3>
        <p>ID: {id}</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos omnis rem voluptatum eveniet ratione corporis laudantium cumque quod consequuntur autem dolorem dolor aspernatur facilis, quidem exercitationem, natus sint ullam ipsa.</p>
        <img src= {img} alt={nombre} />
    </div>
  )
}

export default ItemDetail