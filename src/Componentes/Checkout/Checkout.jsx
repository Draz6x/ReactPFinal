import { useState, useEffect, useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../Service/Config";
import { collection, addDoc  } from "firebase/firestore";

const Checkout = () => {
  const {carrito, vaciarCarrito, total} = useContext(CarritoContext);
  
  const[nombre, setNombre] = useState("");
  const[apellido, setApellido] = useState("");
  const[telefono, setTelefono] = useState("");
  const[email, setEmail] = useState("");
  const[emailConfirmacion, setEmailConfirmacion] = useState("");
  const[ordenId, setOrdenID] = useState("");
  const[error, setError] = useState("");
  
  return (
    <div>
        <h2>Checkout - Finalizar la compra </h2>

        <form>
            {
            carrito.map(producto => (
                <div key={producto.item.id}>
                    <p> {producto.item.nombre} x {producto.cantidad} </p>
                    <p> {producto.item.precio} </p>
                </div>
            ))
        }
           
           <div>
            <label htmlFor="nombre"> Nombre </label>
            <input type="text" id="nombre" onChange={(e)=> setNombre(e.target.value)}/>
           </div>

           <div>
            <label htmlFor="apellido"> Apellido </label>
            <input type="text" id="apellido" onChange={(e)=> setApellido(e.target.value)}/>
           </div>

           <div>
            <label htmlFor="telefono"> Telefono </label>
            <input type="text" id="telefono" onChange={(e)=> setTelefono(e.target.value)}/>
           </div>

           <div>
            <label htmlFor="E-mail"> E-mail </label>
            <input type="text" id="email" onChange={(e)=> setEmail(e.target.value)}/>
           </div>

           <div>
            <label htmlFor="emailcon"> Confirmacion de Mail </label>
            <input type="text" id="email" onChange={(e)=> setEmailConfirmacion(e.target.value)}/>
           </div>

        </form>
        </div>
    
    )
}

export default Checkout