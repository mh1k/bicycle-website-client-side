import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './OrderAndDetails.css'

const OrderAndDetails = () => {
    const { product_id } = useParams();
    const [product, setProduct] = useState({})

    const { user } = useAuth()

    const initInfo = {
        name: user.displayName,
        address: "",
        city: "",
        phoneNumber: ""
    }
    const [orderInfo, setOrderInfo] = useState(initInfo);

    useEffect(() => {
        fetch(`https://mysterious-tor-60699.herokuapp.com/cycles/${product_id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo)
        // console.log(orderInfo);
    }

    const handleOrder = e => {
        e.preventDefault()
        const newOrder = {
            ...orderInfo,
            status: "Pending",
            userName: user.displayName,
            userEmail: user.email,
            bookingInfo: product
        }

        // send to the server
        fetch('https://mysterious-tor-60699.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    alert("Succssfully Order Place")
                    e.target.reset();
                    // setAppointmentSuccess(true)
                    // handleClose();

                }
            });
        // console.log(newOrder);

    }

    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Row>
                    <Col className="col-12 col-md-7">
                        <div className="text-center">
                            <img className="img-fluid" src={product?.cycleImg} alt="" />
                        </div>
                        <h5>Price : {product?.cyclePrice} $</h5>
                        <h4>{product?.cycleName}</h4>
                        <div className="mb-2">
                            <p className="m-0"><span className="fw-bold">Brand :</span> {product?.brand}</p>
                            <p className="m-0"><span className="fw-bold">Type :</span> {product?.type}</p>
                            <p className="m-0"><span className="fw-bold">Material :</span> {product?.material}</p>
                        </div>
                        <div>
                            <p><span className="fw-bold">Details :</span> <br />{product?.cycleDetails}</p>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-5 mt-5">
                        <div>
                            <h2 className="mb-4">Order Information</h2>
                            <form className="mb-3" onSubmit={handleOrder}>
                                <Form.Control onBlur={handleOnBlur} defaultValue={user?.displayName} className="mb-3" name="name" size="lg" type="text" placeholder="Your name" />
                                <Form.Control className="mb-3" name="email" size="lg" readOnly value={user?.email} type="email" placeholder="Your email" />
                                <Form.Control onBlur={handleOnBlur} required className="mb-3" name="address" size="lg" type="text" placeholder="Address" />
                                <Form.Control onBlur={handleOnBlur} required className="mb-3" name="city" size="lg" type="text" placeholder="City" />
                                <Form.Control onBlur={handleOnBlur} required className="mb-3" name="phoneNumber" size="lg" type="number" placeholder="Phone Number" />

                                <button className="login-buttn btn w-100 " type='submit'>Place Order</button>
                            </form>
                        </div>
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default OrderAndDetails;