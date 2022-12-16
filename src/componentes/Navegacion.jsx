import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navegacion = () => {
  return (
    <Navbar bg="light" variant="lg">
      <Container>
        <Navbar.Brand href="/Home">COMPRA Y GANA</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/formulario">Formulario</Nav.Link>
          <Nav.Link href="/Recomendado">Anotados</Nav.Link>
          <Nav.Link href="/Articulos">Premios</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navegacion;