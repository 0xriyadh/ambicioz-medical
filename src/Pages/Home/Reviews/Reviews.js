import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <h1 className="mb-3">Some Lovely Words From Our Patients</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
            ))}
            </Row>
        </div>
    );
};

export default Reviews;