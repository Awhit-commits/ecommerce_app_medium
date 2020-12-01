import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import is

const PrivateRoute = ({ component: Component }, ...rest) => (
    <Route {...rest} render={props => isAuthenicated() ? (<Component {...props} />) :
        (<Redirect to={{ pathname="/login", state: { from: props.location } }} />)}




    />
);
export default PrivateRoute;