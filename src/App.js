import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import ListaProductos from './components/productos/ListaProductos';
import AgregarProducto from './components/productos/AgregarProducto';
import Navegacion from './components/common/Navegacion';
import Footer from './components/common/Footer';
import EditarProducto from './components/productos/EditarProducto';
// BrowserRouter nos da acceso al historial de paginas que tengo
// Switch nos sirve para seleccionar entre rutas
// Route es la ruta

function App() {
  return (
    <Router>
      <Navegacion/>
      <Switch>
        <Route exact path='/'><Inicio/></Route>
        <Route exact path='/productos'><ListaProductos/></Route>
        <Route exact path='/productos/nuevo'><AgregarProducto/></Route>
        <Route exact path='/productos/editar'><EditarProducto/></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
