import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isOnLoading } = useAuth();
    // console.log(isOnLoading);
    // console.log(admin);

    if (isOnLoading || !admin) {
        return <div style={{ marginBottom: "450px" }} className="text-center sppiner-sec "><Spinner className=" mt-3" animation="border" variant="dark" /></div>
    }
   
    // if (isOnLoading || !admin) {
    //     return <div style={{ marginBottom: "450px" }} className="text-center sppiner-sec "><Spinner className=" mt-3" animation="border" variant="dark" /></div>
    // }

    return (
        <Route
            {...rest}

            render={({ location }) => user?.email && admin ? children
                : <Redirect
                    to={{
                        pathname: '/',
                        state: { from: location }
                    }}>
                </Redirect>}>
        </Route>
    );
};

export default AdminRoute;