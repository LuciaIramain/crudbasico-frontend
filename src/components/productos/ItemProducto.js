import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faTrashAlt} from @fortawesome/free-solid-svg-icons

const ItemProducto = (props) => {
  const eliminarProducto = (id) => {
    const URL = process.env.REACT_APP_API_URL+'/'+id;
    Swal.fire({
      title: '¿Estas seguro de eliminar el producto?',
      text: "No puedes recuperar un producto eliminado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Agregar codigo para eliminar el producto de la api
        try{
          const respuesta = await fetch(URL, {
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
            // body no hace falta porque no le envio ningun objeto ni ninguna otra cosa
          })
          if(respuesta.status === 200) {
            // mostrar el cartel
            Swal.fire(
              'Producto eliminado',
              'El producto seleccionado fue correctamente eliminado',
              'success'
            )
            // actualizar los datos
            props.consultarAPI();
          } else {
            Swal.fire(
              'Se produjo un error',
              'Intentelo nuevamente',
              'error'
            )
          }
        }catch(error){
          console.log(error);
          Swal.fire(
            'Se produjo un error',
            'Intentelo en unos minutos',
            'error'
          )
        }
      }
    })
  }

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <p>{props.producto.nombreProducto} <span className="fw-bold fst-italic"> ${props.producto.precioProducto}</span></p>
      <div>
        <Link to={`/productos/editar/${props.producto._id}`} className="btn btn-warning me-1 text-light">Editar</Link>
        {/* <Button variant="warning" className=""></Button> */}
        <Button variant="danger" onClick={() => eliminarProducto(props.producto._id)}>Eliminar{/* <fontAwesomeIcon icon{faTrashAlt} */}</Button>
        {/* en onClick o otro evento, cuando envio la funcion va sin parentesis */}
      </div>
    </ListGroup.Item>
  );
};

export default ItemProducto;
