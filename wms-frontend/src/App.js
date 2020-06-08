import React from 'react';
import './App.css';
import HomePage from './Pages/Homepage';
import ProductsPage from './Pages/ProductsPage';
import ShipmentsPage from './Pages/ShipmentsPage';
import LoginPage from './Pages/LoginPage';
import Customers from './Pages/Customers';
import AuthenticatedContext from './Pages/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/customers' component={Customers}/>

        <Route path='/products'>
              <AuthenticatedContext.Provider>
                <ProductsPage/>
              </AuthenticatedContext.Provider>
        </Route>

        <Route path='/shipments'>
          <ShipmentsPage/>
        </Route>

        <Route path='/login'>
          <LoginPage/>
        </Route>        

      </Switch>
    </Router>
  );
}

export default App;
