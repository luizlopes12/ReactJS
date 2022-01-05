import {Header} from './components/header';
import {React, Fragment} from 'react';
import {Pag1} from './components/pag1'
import {Pag2} from './components/pag2'
import {Pag3} from './components/pag3'
import './style.css'
import {Route, BrowserRouter as Router, Routes, Link, useNavigate  } from "react-router-dom";
function App() {
  // const history = useNavigate();
  // const voltar = () =>{
  //   history.goBack();
  // }
  return (
    <div>
    <Header/>
    <Router>
    <div className="navbar">
    <Link to='/'>Home</Link>
    <Link to='/pag2'>Sobre</Link>
    <Link to='/pag3'>Produtos</Link>
    </div>
    {/* <button onClick={useNavigate.push()}>Voltar</button> */}
    <Routes>
    <Route path="/" element={<Pag1 />}></Route>
    <Route path="/pag2" element={<Pag2 />}></Route>
    <Route path="/pag3" element={<Pag3 />}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
