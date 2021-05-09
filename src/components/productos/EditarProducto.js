import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import {useParams, withRouter} from 'react-router-dom'; //useParams es un metodo para acceder a todas las rutas que pasea a traves de a url
import {campoRequerido, rangoValor} from '../helpers/validaciones';
import Swal from 'sweetalert2';

const EditarProducto = (props) => {
  // obtengo el parametro de la url
  const {id} = useParams() //de este objeto quiero sacar solo la propiedad id
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL)
  // declaro los state
  const [categoria, setCategoria] = useState("");
  const [producto, setProducto] = useState({});
  // Crear useRef
  const nombreProductoRef = useRef('');
  const precioProductoRef = useRef(0);

  // Traer los datos del objeto que quiero editar
  useEffect(()=> {
    consultarProducto();
  },[])

  const consultarProducto = async () => {
    try{
      const respuesta = await fetch(URL+'/'+id);
      if(respuesta.status === 200) {
        const resultado = await respuesta.json();
        setProducto(resultado);
      }
    }catch(error){
      console.log(error);
    }
  }
  
  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    // console.log(nombreProductoRef.current) //con current(es como target) accedo al elemento -- me devuelve todo el input o lo que enlace con ref
    // console.log(nombreProductoRef.current.value) //me devuelve lo que esta escrito
    // revisar si la categoria cambio y si no lo hizco conservar la categoria del state producto
    const categoriaSeleccionada = (categoria === '') ? producto.categoriaProducto : categoria;
    // Si algo falla mostrar alert de error
    if (campoRequerido(nombreProductoRef.current.value) && rangoValor(parseInt(precioProductoRef.current.value)) && campoRequerido(categoriaSeleccionada)) {
       // si esta todo bien enviar la peticion put a la api 
      //  armar el objeto a enviar
      const productoEditado = {
        nombreProducto: nombreProductoRef.current.value,
        precioProducto: precioProductoRef.current.value,
        categoriaProducto: categoriaSeleccionada
      }
      console.log(productoEditado);
      try {
        const respuesta = await fetch(URL+'/'+id, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(productoEditado)
        });
        console.log(respuesta);

        if(respuesta.status === 200){
          Swal.fire(
            'Producto editado!',
            'Su producto fue modificado con éxito!',
            'success'
          );
          props.consultarAPI();
          // redireccionar a la pagina de lista de productos-- history funciona como un arreglo por eso uso push para agregar el elemento al arreglo
          props.history.push('/productos');
        }
      }catch(error){
        console.log(error);
        // mostrar al usuario que ocurrio un error
      }
    }else{
      console.log('mostrar cartel de error');
    }
  }

  return (
    <Fragment>
    <Container className="my-5">
      <Form onSubmit={handleSubmit}>
        <h1 className="my-4 text-center">Editar producto</h1>
        {/* {error ? (
          <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
        ) : null} */}
        <Form.Group className="mb-3">
          <Form.Label>Nombre del producto *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Submarino"
            defaultValue={producto.nombreProducto}
            ref={nombreProductoRef}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio *</Form.Label>
          <Form.Control
            type="number"
            placeholder="$50"
            defaultValue={producto.precioProducto}
            ref={precioProductoRef}
          />
        </Form.Group>
        <section className="text-center my-3">
          <h5>Categoria *</h5>
          <Form.Check
            type="radio"
            label="Bebida caliente"
            name="categoria"
            value="bebida-caliente"
            onChange={cambiarCategoria}
            defaultChecked={producto.categoriaProducto&& producto.categoriaProducto === 'bebida-caliente'}
            inline
          ></Form.Check>
          <Form.Check
            type="radio"
            label="Bebida fria"
            name="categoria"
            value="bebida-fria"
            onChange={cambiarCategoria}
            defaultChecked={producto.categoriaProducto && producto.categoriaProducto === 'bebida-fria'}
            inline
          ></Form.Check>
          <Form.Check
            type="radio"
            label="Sandwich"
            name="categoria"
            value="sandwich"
            onChange={cambiarCategoria}
            defaultChecked={producto.categoriaProducto && producto.categoriaProducto === 'sandwich'}
            inline
          ></Form.Check>
          <Form.Check
            type="radio"
            label="Dulce"
            name="categoria"
            value="dulce"
            onChange={cambiarCategoria}
            defaultChecked={producto.categoriaProducto && producto.categoriaProducto === 'dulce'}
            inline
          ></Form.Check>
          <Form.Check
            type="radio"
            label="Salado"
            name="categoria"
            value="salado"
            onChange={cambiarCategoria}
            defaultChecked={producto.categoriaProducto && producto.categoriaProducto === 'salado'}
            inline
          ></Form.Check>
        </section>
        <Button variant="warning" className="text-light w-100 mb-5" type="submit">
          Guardar Producto
        </Button>
      </Form>
    </Container>
  </Fragment>
  );
};

export default withRouter(EditarProducto);