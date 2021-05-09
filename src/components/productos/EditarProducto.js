import React, { Fragment, useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from "react-bootstrap";
import {useParams} from 'react-router-dom'; //useParams es un metodo para acceder a todas las rutas que pasea a traves de a url

const EditarProducto = () => {
  // obtengo el parametro de la url
  const {id} = useParams() //de este objeto quiero sacar solo la propiedad id
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL)
  // declaro los state
  const [categoria, setCategoria] = useState("");
  const [producto, setProducto] = useState({});

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

  return (
    <Fragment>
    <Container className="my-5">
      <Form>
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
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio *</Form.Label>
          <Form.Control
            type="number"
            placeholder="$50"
            defaultValue={producto.precioProducto}
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
          Agregar Producto
        </Button>
      </Form>
    </Container>
  </Fragment>
  );
};

export default EditarProducto;