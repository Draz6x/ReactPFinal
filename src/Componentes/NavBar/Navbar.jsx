import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <Link to="/">
        <img className='imgCarrito' src="../img/BL.jpg" alt="Carrito" />
          <h1> Vinoteca La Fulminante</h1>
          <h3>"de esas que pierdes trabajo y familia"</h3>
        </Link>
            <nav>
                <ul>
                    <li> <NavLink to="/categoria/1"><button> Cerveza </button></NavLink> </li>
                    <li><NavLink to="/categoria/2"> <button> Ron </button></NavLink></li>
                    <li><NavLink to="/categoria/3"> <button> Whisky </button></NavLink></li>
                    <li><NavLink to="/categoria/4"> <button> Vinos </button></NavLink></li>
                    <li><NavLink to="/categoria/5"> <button> Accesorios </button></NavLink></li>
                </ul>
            </nav>
            <CartWidget/>

        </header>
  )
}

export default Navbar