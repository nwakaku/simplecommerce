import React,{ useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../UserContext';

export default function PrivateRoute({ component: Component, ...rest}) {
    const { state } = useContext(UserContext)

    return (
        <Route
            {...rest}
            render={props => {
                return state.kite ? <Component {...props} /> : <Redirect to="/login" />
            }}>   
        </Route>
    )
}
