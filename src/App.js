import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Component/Home/Home/Home';
import ExploreProducts from './Component/ExploreProducts/ExploreProducts';
import OrderAndDetails from './Component/OrderAndDetails/OrderAndDetails';
import AuthProvider from './Context/AuthProvider';
import Login from './Component/Login&Register/Login/Login';
import Register from './Component/Login&Register/Register/Register';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import NotFound from './Component/NotFound/NotFound';


function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/explore_product'>
            <ExploreProducts></ExploreProducts>
          </Route>
          <PrivateRoute path='/products/order_details/:product_id'>
            <OrderAndDetails></OrderAndDetails>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
