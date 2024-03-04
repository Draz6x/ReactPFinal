import React from 'react';
import NavBar from './Componentes/NavBar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';

const App = () => {
  return (

    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element = {<h2> Carrito en breve </h2>}/>
        </Routes>
        </CarritoProvider>
      </BrowserRouter>

    </>
  )
}

export default App