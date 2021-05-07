import React, { Fragment, useState } from "react";
import { Container, Form, Button  } from "react-bootstrap";

const AgregarProducto = () => {
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState('');
  const [categoria, setCategoria] = useState('');

  return (
    <Fragment>
      <Container className="my-5">
        <Form>
          <h1 className="my-4 text-center">Agregar un nuevo producto</h1>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control type="text" placeholder="Submarino" onChange={(e) => setNombreProducto(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" placeholder="$50" onChange={(e) => setPrecioProducto(e.target.value)} />
          </Form.Group>
          <section className="text-center my-3">
            <h5>Categoria</h5>
            <Form.Check type="radio" label="Bebida caliente" name="categoria" value="bebida-caliente" onChange={(e) => setCategoria(e.target.value)} inline></Form.Check>
            <Form.Check type="radio" label="Bebida fria" name="categoria" value="bebida-fria" onChange={(e) => setCategoria(e.target.value)} inline></Form.Check>
            <Form.Check type="radio" label="Sandwich" name="categoria" value="sandwich" onChange={(e) => setCategoria(e.target.value)} inline></Form.Check>
            <Form.Check type="radio" label="Dulce" name="categoria" value="dulce" onChange={(e) => setCategoria(e.target.value)} inline></Form.Check>
            <Form.Check type="radio" label="Salado" name="categoria" value="salado" onChange={(e) => setCategoria(e.target.value)} inline></Form.Check>
          </section>
          <Button variant="warning" className="text-light w-100" type="submit">Agregar Producto</Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default AgregarProducto;
