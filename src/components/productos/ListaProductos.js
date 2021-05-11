import React, { Fragment } from "react";
import { Container , ListGroup} from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const ListaProductos = (props) => {
  return (
    <Fragment>
      <Container className="my-5">
        <h1 className="text-center mb-5">Lista de productos</h1>
        <ListGroup>
          {
            // map mapea o recorre todos los elementos del arreglo
            props.productos.map((producto) => <ItemProducto producto={producto} key={producto._id} consultarAPI={props.consultarAPI}/>)
          }
          
        </ListGroup>
      </Container>
    </Fragment>
  );
};

export default ListaProductos;
