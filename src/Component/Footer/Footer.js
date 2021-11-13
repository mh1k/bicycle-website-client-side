import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div id="view-btn" className=" mt-5 view-btn  pt-5 pb-4">
            <Container>
                <Row>

                    <Col className="col-12 text-center col-md-4  mb-3">
                        <img className="img-fluid" width="70%" src="https://i.ibb.co/KVfSf2G/logo-White.png" alt="" />
                    </Col>



                    <Col className="col-6 col-md-4 mb-3">

                        <Link className="text-decoration-none text-light footer-btn" to='/about'>About us</Link>
                        <br />
                        <Link className="text-decoration-none text-light footer-btn" to='/contact'>Contact us</Link>
                        <br />
                        <Link to='/terms' className="text-decoration-none text-light footer-btn" >Terms and Conditions</Link>
                        <br />
                        <Link to='/privacy' className="text-decoration-none text-light footer-btn">Privacy Policy</Link>

                    </Col>
                    <Col className="col-6 col-md-4">

                        <h3>Address</h3>
                        <p>Cycling Emporium <br />
                            Emporium Tower<br />
                            Gulshan, Dhaka<br />
                            Phone : +666888777<br />
                            Email : cyclingemporium@web.com</p>

                    </Col>



                </Row>
                <p className="text-center">Copyright © 2021 cycling-emperium.com</p>
            </Container>

        </div>
    );
};

export default Footer;