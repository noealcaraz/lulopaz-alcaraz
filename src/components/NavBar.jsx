import React from 'react'
import { CartWidget } from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

  return (
    <Navbar className="m-0 p-0 navbar-main justify-content-between" bg="dark">  
      <Container className="container">
        <Navbar.Brand className="navbar-brand">LULOPAZ</Navbar.Brand>
        <Nav className="me-auto nav d-flex">
            <Nav.Link className="nav-item" href="">Productos</Nav.Link>
            <Nav.Link className="nav-item" href="">Contacto</Nav.Link>
            <Nav.Link className="nav-item" href="">Quienes somos?</Nav.Link>
        </Nav>
        </Container>
        <CartWidget />
      </Navbar>
    
  )
}

export default NavBar