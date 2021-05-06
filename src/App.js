import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import ListaProductos from './components/ListaProductos';
import AgregarProducto from './components/AgregarProducto';
// BrowserRouter nos da acceso al historial de paginas que tengo
// Switch nos sirve para seleccionar entre rutas
// Route es la ruta

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Inicio/></Route>
        <Route exact path='/productos'><ListaProductos/></Route>
        <Route exact path='/productos/nuevo'><AgregarProducto/></Route>
      </Switch>
    </Router>
  );
}

export default App;
