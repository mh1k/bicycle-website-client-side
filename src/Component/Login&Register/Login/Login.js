import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import { useLocation, useHistory } from 'react-router';
import './Login.css'

const Login = () => {
    const { loginUser,error,setError, isLoading, signInWithGoogle } = useAuth();

    const [loginData, setLoginData] = useState({})

    const location = useLocation();
    const history = useHistory()

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        setError("")


    }

    const handleLogin = e => {
        e.preventDefault()

        loginUser(loginData.email, loginData.password, location, history)
    }


    const handleGoogleLogin = () => {
        signInWithGoogle(location, history)
    }

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Row>
                    <Col className="col-12 col-md-6 text-center d-flex justify-content-center align-items-center">
                        {/* <div className="text-center">
                            <img className="img-fluid" width="30%" src="https://i.ibb.co/5jP6vpN/logo-Black.png" alt="" />
                        </div> */}
                        <div className="w-75">

                            <h3 className="mb-5">Please Login</h3>
                            <form className="mb-3" onSubmit={handleLogin}>
                                <Form.Control onBlur={handleOnBlur} className="mb-3" required name="email" size="lg" type="email" placeholder="Your email" />
                                <Form.Control onBlur={handleOnBlur} className="" required size="lg" name="password" type="password" placeholder="Password" />
                                <p className="text-start text-danger  mt-1 mb-2" style={{height:"20px"}}>{error}</p>
                                <button className="login-buttn btn w-100 " type='submit'>Login</button>
                            </form>
                            <Link onClick={()=>setError("")} to="/register">New User ? Please Register</Link>
                            <br />
                            <button onClick={handleGoogleLogin} className="google-btn btn w-100 mt-4"><img className="google-img" src="https://i.ibb.co/cFWmcn3/New-Project-3.png" width='30px' alt="" /> Continue with google</button>

                        </div>
                    </Col>
                    <Col className="col-12 col-md-6 text-center">
                        <img className="login-img img-fluid" src="https://i.ibb.co/7VPZ6G1/cyclerunung-min.gif" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;