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
  const[ordenId, setOrdenId] = useState("");
  const[error, setError] = useState("");
  
    const manejadorSubmit = (event) =>{
        if(!nombre || !apellido || !telefono || !email ||!emailConfirmacion) {
            setError ("Por favor completar todos los campos");
            return ;
        }
          if (email !== emailConfirmacion) {
        setError("Los Email no coinciden");
          }

          const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
          }

          addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error =>{
                console.log("Error al crear la orden de compra", error);
                setError("Por favor intente mas tarde");
            })



        }   

   


  return (
    <div>
        <h2>Checkout - Finalizar la compra </h2>

        <form onSubmit={manejadorSubmit}>
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

        {
            error && <p style={{color: "red"}}> {error} </p>
        }

        <button> Finalizar Orden </button>
        {
            ordenId && <strong> Gracias por su compra! Tú numero de orden es el siguiente: {ordenId} </strong>
        }

        </form>
        </div>
    
    )
}

export default Checkout