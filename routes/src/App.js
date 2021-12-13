import {Header} from './components/header';
import {React, Fragment} from 'react';
import {Pag1} from './components/pag1'
import {Pag2} from './components/pag2'
import {Pag3} from './components/pag3'

import {Route, BrowserRouter, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div>
    <Header/>
    <BrowserRouter>
    <Link to='/'>Home</Link>
    <Link to='/pag2'>Sobre</Link>
    <Link to='/pag3'>Produtos</Link>
    <Routes>
    <Route path="/" element={<Pag1 />}></Route>
    <Route path="/pag2" element={<Pag2 />}></Route>
    <Route path="/pag3" element={<Pag3 />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
