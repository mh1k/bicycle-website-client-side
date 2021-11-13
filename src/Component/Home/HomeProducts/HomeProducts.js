import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../../Shared/Product/Product';

const HomeProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://mysterious-tor-60699.herokuapp.com/cycles")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);
    return (
        <Container className="mt-5">
            <h3 className="mb-5 text-dark text-center">Tranding Products</h3>
            <Row xs={1} md={3} className="g-4">
                {
                    products?.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </Row>
        </Container>
    );
};

export default HomeProducts;