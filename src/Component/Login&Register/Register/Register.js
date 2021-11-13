import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import { useLocation, useHistory } from 'react-router';

const Register = () => {
    const {  isLoading,error,setError, signInWithGoogle, registerUser } = useAuth();

    const [registerData, setRegisterData] = useState({})

    const location = useLocation();
    const history = useHistory()
   

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData }
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
        // console.log(registerData);
        setError("")


    } 

    const handleRegister = e => {
        // console.log(registerData);
        e.preventDefault();
         registerUser(registerData.email, registerData.password, registerData.name, location, history)
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

                            <h3 className="mb-5">Please Register</h3>
                            <form className="mb-3" onSubmit={handleRegister}>
                                <Form.Control onBlur={handleOnBlur} required className="mb-3" name="name" size="lg" type="text" placeholder="Your name" />
                                <Form.Control onBlur={handleOnBlur} required className="mb-3" name="email" size="lg" type="email" placeholder="Your email" />
                                <Form.Control onBlur={handleOnBlur} required className="" size="lg" name="password" type="password" placeholder="Password" />
                                <p className="text-start text-danger  mt-1 mb-2" style={{height:"20px"}}>{error}</p>
                                <button className="login-buttn btn w-100 " type='submit'>Register</button>
                            </form>
                            <Link onClick={()=>setError('')} to='/login'>Already Registerd ? Please Login</Link>
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

export default Register;