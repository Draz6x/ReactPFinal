import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <Link to="/">
          <h1> Vinoteca del McDraz</h1>
        </Link>
            <nav>
                <ul>
                    <li> <NavLink to="/categoria/1"> Cervezas </NavLink> </li>
                    <li><NavLink to="/categoria/2"> Destilados </NavLink></li>
                    <li><NavLink to="/categoria/3">  Whisky </NavLink></li>
                    <li><NavLink to="/categoria/4">  Vinos </NavLink></li>
                    <li><NavLink to="/categoria/5"> Accesorios</NavLink></li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
  )
}

export default Navbar