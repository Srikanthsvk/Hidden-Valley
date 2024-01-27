import React from 'react'
import { Col, Row } from 'react-bootstrap'
import landingImg from '../../assets/landingImg.jpg'

import './home.css'

export default function Home() {
    return (
        <div>
            <Row style={{ textAlign: 'center', marginTop: '80px', alignItems: 'center', justifyContent: 'center', margin: 0, padding: '80px 20px 20px 20px' }}>
                <Col lg="4">
                    <img
                        alt=""
                        src={landingImg}
                        width="300"
                        height="250"
                        style={{ borderRadius: '20px' }}
                        className="d-inline-block align-top"
                    />{' '}
                </Col>
                <Col lg="7">
                    <h3 style={{ fontSize: '32px', style: 'bold' }}> 🌍 Discover, Explore, and Share Your Travel Adventures!</h3>
                    <h5>Are you a travel enthusiast seeking inspiration for your next adventure? Look no further! hidden valley is your go-to destination for immersive travel experiences, hidden gems, and insider tips on the world's most breathtaking tourist spots.</h5>
                </Col>
            </Row>

            <Row style={{ textAlign: 'center', marginTop: '80px', alignItems: 'center', justifyContent: 'center', margin: 0, padding: '20px 20px 80px 20px' }}>
                <Col lg="7">
                    <h3 style={{ fontSize: '32px', style: 'bold' }}> 📸 Capture the Moments that Matter</h3>
                    <h5>Our blog is a visual feast! Immerse yourself in stunning photographs and captivating stories that bring each destination to life. From iconic landmarks to off-the-beaten-path wonders, our curated content will fuel your wanderlust and ignite your passion for exploration.</h5>
                </Col>
                <Col lg="4">
                    <img
                        alt=""
                        src={landingImg}
                        width="300"
                        height="250"
                        style={{ borderRadius: '20px' }}
                        className="d-inline-block align-top"
                    />{' '}
                </Col>
            </Row>
        </div>
    )
}
