import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Product from '../Shared/Product/Product';

const ExploreProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://mysterious-tor-60699.herokuapp.com/cycles")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <Container className="mt-5">
                <h3 className="mb-5 text-dark text-center">Our All Product</h3>
                {
                    !products.length ? <div style={{ marginBottom: "400px" }} className="text-center sppiner-sec "><Spinner className=" mt-3" animation="border" variant="dark" /></div> :
                        <Row xs={1} md={3} className="g-4">
                            {
                                products?.map(product => <Product key={product._id} product={product}></Product>)
                            }
                        </Row>
                }
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ExploreProducts;