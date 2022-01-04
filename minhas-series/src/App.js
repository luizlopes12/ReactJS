import React from 'react'
import Header from './components/Header'
import {
  Route, 
  BrowserRouter as Router, 
  Routes
} from "react-router-dom";

const Home = () =>{
  return <h1>Home</h1>
}
const Generos = () =>{
  return <h1>Generos</h1>
}
function App() {
  return (
    <Router>
    <div>
    <Header/>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/Generos' exact element={<Generos/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
