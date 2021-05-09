import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import ListaProductos from './components/productos/ListaProductos';
import AgregarProducto from './components/productos/AgregarProducto';
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import EditarProducto from './components/productos/EditarProducto';
import {useState, useEffect} from 'react';
// BrowserRouter nos da acceso al historial de paginas que tengo
// Switch nos sirve para seleccionar entre rutas
// Route es la ruta

function App() {
  const URL = process.env.REACT_APP_API_URL;
  const [productos, setProductos] = useState([]);

  // Petición get
  useEffect(() => {
    consultarAPI();
  },[]);

  const consultarAPI = async() => {
    try{
      const consulta = await fetch(URL);
      const respuesta = await consulta.json(); //si digo consulta.json() estraigo la información solo de la consulta
      console.log(respuesta);
      setProductos(respuesta);
    }catch(error){
      console.log(error);
    }
  }
    

  return (
    <Router>
      <Navegacion/>
      <Switch>
        <Route exact path='/'><Inicio/></Route>
        <Route exact path='/productos'><ListaProductos productos={productos} consultarAPI={consultarAPI}/></Route>
        <Route exact path='/productos/nuevo'><AgregarProducto consultarAPI={consultarAPI}/></Route>
        <Route exact path='/productos/editar/:id'><EditarProducto/></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
