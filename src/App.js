import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Home from "./router/home/Home"
import Cart from "./router/cart/Cart"
import Login from './router/login/Login';
import Footer from './components/footer/Footer';
import Private from './router/private/Private';
import Admin from './router/admin/Admin';
import SinglePage from './router/single-page/SinglePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/pro/:id" component={SinglePage}/>
          <Route path="/login" component={Login}/>
          <Private path="/admin">
            <Admin/>
          </Private>
          <Route path="/cart" component={Cart}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
