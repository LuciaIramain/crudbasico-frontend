import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Navegacion = () => {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Navbar.Brand href="/">CRUD Basico</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink exact={true} to='/' className="nav-link mx-2">Inicio</NavLink> {/*to es hacia y funciona como href -- exact hay que ponerle el true porque por defecto esta en false*/}
          <NavLink exact={true} to='/productos' className="nav-link mx-2">Productos</NavLink>
          <NavLink exact={true} to='/productos/nuevo' className="nav-link mx-2">Agregar producto</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
