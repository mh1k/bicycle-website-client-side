import { faUser } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import './HomeReviews.css'

const HomeReviews = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />


    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // console.log(reviews);

    return (
        <Container className="my-5">
            <h2 className="text-center mb-3">Customer Review</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    reviews?.map(review => <Col key={review._id}>
                        <Card className=" card-shadow package-card h-100" id="packageCard">

                            <Card.Body className="d-flex flex-column">
                                <div className="d-flex flex-column mt-2  align-items-center">
                                    <span className="h3 user-icon px-2 py-1">{userIcon}</span>
                                </div>
                                <Card.Title className="pakage-title text-center ">{review?.userName}</Card.Title>
                                <p className="text-center rating-color m-0"><Rating
                                    readonly
                                    initialRating={review?.rating}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"/>
                                </p>
                                 
                                <Card.Text className="px-4 text-center">
                                    {review?.reviews}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default HomeReviews;