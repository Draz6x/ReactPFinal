import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <header>
        <h1> Vinoteca del Chubito </h1>
            
            <nav>
                
                <ul>
                    <li>Cervezas</li>
                    <li>Destilados</li>
                    <li>Whisky</li>
                    <li>Ron</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
  )
}

export default Navbar