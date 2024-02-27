import React from 'react';
import ItemCount from './Componentes/ItemCount/ItemCount';
import NavBar from './Componentes/NavBar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App