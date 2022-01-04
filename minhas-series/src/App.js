import React, {useState} from 'react'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap'

const Header = () =>{
  const [open, setOpen] = useState(false)
  const toggle = () =>{
    setOpen(!open)
  }
  
  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand>Minhas Séries</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={open} navbar>
            <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/'>Gêneros</NavLink>            
            </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    </div>
  );
}

function App() {
  return (
    <Header/>
  );
}

export default App;
