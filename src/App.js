
import './App.css';
import { BrowserRouter as Router , Route , Switch , Link } from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Product from './pages/Product';
import CartIcon from './components/CartIcon';

function App() {
  return (
    
    <Router>
       <div className='container'>
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Products Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/products">Producs</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to='/cart'>Cart</Link>
                    </li>
                
                  </ul>
                 
                </div>
              </div>
              <CartIcon />
            </nav>
         
            
                 <Route path="/" exact  component={Home} />
                 <Route path="/cart"  exact component={Cart} />
                 <Route path="/products" exact component={Products}  />
                 <Route path="/products/:id" exact  component={Product}  />
           
        
       </div>
      </Router>
  );
}

export default App;
