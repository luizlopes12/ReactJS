import React from 'react'
import Header from './components/Header'
import { 
  BrowserRouter as Router,
  Route

} from 'react-router-dom'
const Home = () =>{
  return <h1>Home</h1>
}
const Generos = () =>{
  return <h1>Generos</h1>
}
function App() {
  return (

    <div>
    <Router>
    <Header/>
    <Route exact path='/' component={Home}/>
    </Router>
    </div>
    
  );
}

export default App;
