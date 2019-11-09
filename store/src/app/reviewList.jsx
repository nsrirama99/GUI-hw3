import React from 'react';
import Card from 'react-bootstrap/Card';

export const ReviewList = (props) => (
    <>
    <h3>Product Reviews({props.reviews.length})</h3>
    <p style={{ "display":props.reviews.length > 0 ? 'none' : 'block' }}>Be the first to add a review!</p>
    <ul className="list-group">
        {
        props.reviews.map((r, i) => 
        <Card>
            <Card.Body>
            <Card.Header></Card.Header>
            <Card.Subtitle>
                <span>{r.userName}</span>
                <span>{r.date}</span>
            </Card.Subtitle>
            <Card.Text>{r.comment}</Card.Text>
            </Card.Body>
        </Card>
        )
        }
    </ul>
    </>
);