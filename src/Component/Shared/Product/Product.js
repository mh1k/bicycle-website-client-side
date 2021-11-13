import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product, news, handleDeleteProduct }) => {
    return (
        <Col>
            <Card className="packageCard card-shadow package-card h-100" id="packageCard">
                <Card.Img className="card-img product-img" variant="top" src={product?.cycleImg} />
                <Card.Body className="d-flex flex-column">

                    <Card.Title className="pakage-title ">{product?.cycleName}</Card.Title>
                    <h6 className="price">Price : {product?.cyclePrice} $</h6>
                    <Card.Text>
                        {product?.cycleDetails.slice(0, 110)}...
                    </Card.Text>
                    <div className="mt-auto ">
                        <Link to={`/products/order_details/${product._id}`}><button className="btn mb-2 w-100 buying-btn">Purchase Now</button></Link>
                        {
                            news && <button onClick={()=>handleDeleteProduct(product._id)} className="btn mb-2 w-100 buying-btn">Delete Product</button>
                        }
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;