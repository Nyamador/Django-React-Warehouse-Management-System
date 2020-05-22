import React, { useState } from 'react';
import './App.css';
import HomePage from './Pages/Homepage';
import Customers from './Pages/Customers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);

  const handleClick = () => {
    fetch('http://127.0.0.1:8000/api/v1/products/all')
      .then((response) => response.json())
      .then((data) => setProducts([...data]));
  };

  return (
    // <>
    //   <div>
    //     <button onClick={handleClick}>Fetch Products</button>

    //     {products.map((product) => (
    //       <p key={Math.random()}>{product.name}</p>
    //     ))}
    //   </div>
    // </>

    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>

        <Route path='/customers'>
          <Customers/>
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
