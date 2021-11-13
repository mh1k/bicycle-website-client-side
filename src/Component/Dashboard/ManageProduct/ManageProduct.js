import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://mysterious-tor-60699.herokuapp.com/cycles")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteProduct = id=>{
        const proceed = window.confirm("Are you sure, you want to Delete Product !!!")
        if (proceed) {
            const url = `https://mysterious-tor-60699.herokuapp.com/cycles/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert("delete Product Successfully")
                        const remainingProducts = products.filter(order => order._id !== id);
                        setProducts(remainingProducts)
                    }
                })
        }
    }

    return (
        <Container className="mt-5">
            <h3 className="mb-5 text-dark text-center">Manage All Product</h3>
            <Row xs={1} md={3} className="g-4">
                {
                    products?.map(product => <Product key={product._id} handleDeleteProduct={handleDeleteProduct} news={true} product={product}></Product>)
                }
            </Row>
        </Container>
    );
};

export default ManageProduct;