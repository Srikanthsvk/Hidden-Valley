import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Contact() {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', background: 'black', color: 'white', padding: '20px 40px 70px 40px' }}>
                <Row style={{ justifyContent: 'space-around', textAlign: 'justify'}}>
                    <Col lg="3">
                        <h4 style={{ textAlign: 'center', paddingBottom: '20px' }}>Recent Blog Titles</h4>
                        <h6> Exploring Hidden Gems in Ooty</h6>
                        <h6> A Journey Through South hiddens</h6>
                        <h6> Adventures in the Heart of Ooty</h6>
                        
                    </Col>
                    <Col lg="3">
                        <h4 style={{ textAlign: 'center', paddingBottom: '20px' }}>Contact Information</h4>
                        <h6><strong>Email:</strong> hiiden@valley.com</h6>
                        <h6><strong>Phone:</strong> (000) 000-0000</h6>
                    </Col>
                    <Col lg="3">
                        <h4 style={{ textAlign: 'center', paddingBottom: '20px' }}>Follow Us On</h4>
                        <h6># Facebook</h6>
                        <h6># Instagram</h6>
                        <h6># Youtube</h6>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
