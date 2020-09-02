import React from 'react';
import { Route, Redirect} from 'react-router-dom';

export const PrivateRoute  = ({coponent: Component, ...rest}) => (
    <Route {...rest} render={props => (
        <Component {...props}/>
    )} 
    />

)