import React, { Fragment, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom'; //withrouter nos da permiso para usar location, history and match que son propiedades para redireccionar a paginas dentro de mi sitio


const AgregarProducto = (props) => {
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL);
  const [nombreProducto, setNombreProducto] = useState("");
  const [precioProducto, setPrecioProducto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async(e) => { //async se usa solo con el await y quiere decir que se comporta de manera asincronica y tiene que ir en la misma funcion que await
    e.preventDefault();
    // validar los datos
    if (
      nombreProducto.trim() === "" ||
      precioProducto.trim() === "" ||
      categoria === ""
    ) {
      // mostrar un cartel de error
      setError(true);
      return;
    } else {
      // enviar el producto a la api
      setError(false);

      // Crear el objeto a enviar
      const datos = {
        nombreProducto, // es lo mismo que nombreProducto: nombreProducto y solo lo puedo usar cuando el nombre del state y el de db.json sean iguales
        precioProducto: precioProducto,
        categoriaProducto: categoria
      };
      console.log(datos);
      // enviar objeto a la api, operacion POST -- try{}catch(){} es una estructura de control
      try{
        // Cabezera de datos
        const parametros = {
          method: "POST", //cuando mando post, api sabe que voy a enviar un objeto y lo tengo que guardar en algun lugar
          headers: {
            "Content-Type": "application/json" // headers: en que formato lo mando, en este caso en json
          },
          body: JSON.stringify(datos)// que dato le quiero enviar
        };

        // Ejecutar la solicitud o request -- fetch es un metodo que se encarga de hacer las solicitudes
        const respuesta = await fetch(URL, parametros); // await es para que no se ejecute la siguiente linea hasta que reciba la respuesta, se traduce(espera)
        console.log(respuesta);
        if((await respuesta.status) === 201) {
          // mostrar un cartel al usuario
          Swal.fire(
            'Producto agregado!',
            'Se cargo un nuevo producto en la cafeteria!',
            'success'
          )
          // limpiar el formulario
          // setNombreProducto('');
          // setPrecioProducto('');
          // setCategoria('');
          // Recargar os productos
            props.consultarAPI();
          // redireccionar a otra ruta -- history es un objeto que tiene metodos para que pueda navegar por las rutas
            props.history.push('/productos');
        }
      }catch(error){
        console.log(error);
      }
    }
  };
  // las variablesde ambiente(envirornment) es un archivo dende voy a cear variables que se van a usar en cualuier lugar de mi programa

  return (
    <Fragment>
      <Container className="my-5">
        <Form onSubmit={handleSubmit}>
          <h1 className="my-4 text-center">Agregar un nuevo producto</h1>
          {error ? (
            <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
          ) : null}
          <Form.Group className="mb-3">
            <Form.Label>Nombre del producto *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Submarino"
              onChange={(e) => setNombreProducto(e.target.value)}
              value={nombreProducto}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio *</Form.Label>
            <Form.Control
              type="number"
              placeholder="$50"
              onChange={(e) => setPrecioProducto(e.target.value)}
              value={precioProducto}
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
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Bebida fria"
              name="categoria"
              value="bebida-fria"
              onChange={cambiarCategoria}
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Sandwich"
              name="categoria"
              value="sandwich"
              onChange={cambiarCategoria}
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Dulce"
              name="categoria"
              value="dulce"
              onChange={cambiarCategoria}
              inline
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Salado"
              name="categoria"
              value="salado"
              onChange={cambiarCategoria}
              inline
            ></Form.Check>
          </section>
          <Button variant="warning" className="text-light w-100" type="submit">
            Agregar Producto
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default withRouter(AgregarProducto); //necesito hacerlo junto con el import
