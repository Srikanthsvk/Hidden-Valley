import React from 'react'

import { Col, Row, Button, Form } from 'react-bootstrap'


export default function Community() {
    return (
        <div style={{ textAlign: 'center', justifyContent: 'center', padding: '20px 50px 20px 50px' }}>
            <h3>Connect with Like-Minded Explorers</h3>
            <h5>At hidden valley, we believe in the power of shared experiences. The Community section is your gateway to a vibrant network of travel enthusiasts. Connect with fellow explorers, exchange tips, and celebrate the joy of wanderlust together. From travel anecdotes to must-visit recommendations, this is the place where the global community comes alive.</h5>

            <div className='cardsContact' style={{padding: '80px'}}>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Enter your name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Enter Nick Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your nick name to show others" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Share your experience here</Form.Label>
                        <Form.Control placeholder="Share your experiece with others" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
