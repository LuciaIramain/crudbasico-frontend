import React from "react";
import { ListGroup, Button } from "react-bootstrap";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faTrashAlt} from @fortawesome/free-solid-svg-icons

const ItemProducto = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>{props.producto.nombreProducto} <span className="fw-bold fst-italic"> ${props.producto.precioProducto}</span></p>
      <div>
        <Button variant="warning" className="me-1">Editar</Button>
        <Button variant="danger">Eliminar{/* <fontAwesomeIcon icon{faTrashAlt} */}</Button>
        
      </div>
    </ListGroup.Item>
  );
};

export default ItemProducto;
