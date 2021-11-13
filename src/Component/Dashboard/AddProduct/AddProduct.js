import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const AddProduct = () => {
    const [addproduct, setAddProduct] = useState({})

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...addproduct }
        newLoginData[field] = value;
        setAddProduct(newLoginData);
        // console.log(addproduct);

    }

    const handleAddProduct = e => {
        e.preventDefault()

        fetch('https://mysterious-tor-60699.herokuapp.com/cycles', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addproduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Succssfully Added This Product")
                    e.target.reset();
                    // console.log(data);
                }
            })
    }
    return (
        <Container>
            <div>
                <h2 className="my-4">Add Product</h2>
                <form onSubmit={handleAddProduct}>
                    <Form.Control onBlur={handleOnBlur} required className="mb-3" name="cycleName" size="lg" type="text" placeholder="Product Name" />
                    <Form.Control onBlur={handleOnBlur} required className="mb-3" name="cycleImg" size="lg" type="text" placeholder="Product Image Link" />
                    <Form.Control onBlur={handleOnBlur} required className="mb-3" name="cyclePrice" size="lg" type="number" placeholder="Product Price" />
                    <Form.Control onBlur={handleOnBlur} required className="mb-3" name="brand" size="lg" type="text" placeholder="Product Brand Name" />
                    <Form.Control onBlur={handleOnBlur} required className="mb-3" name="type" size="lg" type="text" placeholder="Product Type example-Mountain Bikes/Gravel Bikes" />
                    <Form.Control onBlur={handleOnBlur} required className="mb-3" name="material" size="lg" type="text" placeholder="Product Body Type example- Aluminium/Carbon etc" />
                    <Form.Control as="textarea" required onBlur={handleOnBlur} name="cycleDetails" type="textarea" rows={3} placeholder="Product Details" />
                    <button className="btn btn-secondary mt-3 w-50" type='submit'>Add Product</button>
                </form>

            </div>
        </Container>
    );
};

export default AddProduct;