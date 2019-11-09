import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class ReviewForm extends React.Component {
    state = {
        userName: "",
        rating: 0,
        comment: ""
    }

    render() {
        return (
            <>
                <Form>
                    <Row>
                        <Col>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text"/>
                        </Col>
                        <Col>
                            <Form.Label>Rating</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Col>
                    </Row>
                </Form>
            </>
        )
    }
}