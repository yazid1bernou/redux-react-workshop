
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

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
                      <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                
                  </ul>
                 
                </div>
              </div>
            </nav>
         
            <Routes>
                 <Route path='/' exact element={ <Home/>} />
                 <Route path='/cart'  element={ <Cart/>} />
                 <Route path='/products'  element={ <Products/>} />
                 
            </Routes>
        
       </div>
    </Router>
  );
}

export default App;
