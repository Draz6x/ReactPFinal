import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import { CarritoContext } from "../../Context/CarritoContext"
import { useContext } from "react"

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext (CarritoContext);

if (cantidadTotal === 0) {
    return (
        <>
        <h2>No Hay productos en el carrito</h2>
        <Link to="/"> Ver Productos </Link>
        </>
    )
}
  return (
    <div>
        {
        carrito.map(prod => <CartItem key={prod.id} {...prod} />)
        }
        <h3>Total:$ {total} </h3>
        <button onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
        <Link to="/checkout"> Finalizar Compra </Link>
    </div>
  )
}

export default Cart