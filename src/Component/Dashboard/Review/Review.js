import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../Hooks/useAuth';
import './Review.css'

const Review = () => {
    const { user } = useAuth()
    const [reviews, setReview] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRatingData = { ...reviews }
        newRatingData[field] = value;
        setReview(newRatingData);
        // console.log(reviews);
    }

    const handleReview = e => {
        e.preventDefault()
        const newReviews = {
            ...reviews,
            userName: user.displayName,
            userEmail: user.email

        }
        // console.log(newReviews);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReviews)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {

                    alert("Succssfully Submit Your Review")
                    e.target.reset();
                    // setAppointmentSuccess(true)
                    // handleClose();

                }
            });


    }
    return (
        <Container className="mt-5 d-flex justify-content-center">
            <div className="p-5 shadow-lg review-box">
                <h2 className="mb-4">Rate And Review</h2>
                <form onSubmit={handleReview}>
                    <Form.Control onBlur={handleOnBlur} required className="mb-3" name="rating" size="lg" type="number" placeholder="Rating 1-5" />
                    <Form.Control as="textarea" required onBlur={handleOnBlur} name="reviews" type="textarea" rows={3} placeholder="Your review" />
                    <button type="submit" className="btn btn-success w-100 mt-3">Submit</button>
                </form>
            </div>
        </Container>
    );
};

export default Review;