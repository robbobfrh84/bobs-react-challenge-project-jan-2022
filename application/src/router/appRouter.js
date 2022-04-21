import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Main, Login, OrderForm, ViewOrders} from '../components';

const AppRouter = (props) => {

  const RouteGuarder = ({children}) => {
    const auth = useSelector((state) => state.auth);
    if (!auth.token) {
      return <Redirect to="/login" />
    } else {
      return children
    }
  }

  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Switch>
        <RouteGuarder>
          <Route path="/order" exact component={OrderForm} />
          <Route path="/view-orders" exact component={ViewOrders} />
        </RouteGuarder>
      </Switch>
    </Router>
  );
}

export default AppRouter;
