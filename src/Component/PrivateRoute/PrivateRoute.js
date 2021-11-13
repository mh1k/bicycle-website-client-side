import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isOnLoading } = useAuth();
    if (isOnLoading) {
        return <div style={{ marginBottom: "650px" }} className="text-center sppiner-sec "><Spinner className=" mt-3" animation="border" variant="dark" /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children
                : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}>
                </Redirect>}>
        </Route>
    );
};

export default PrivateRoute;