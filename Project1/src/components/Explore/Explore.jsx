import React from 'react'
import { Col, Row } from 'react-bootstrap'

import img1 from '../../assets/introImg5.jpg'

export default function Explore() {
    return (
        <div style={{ justifyContent: 'space-between', padding: '30px 50px 30px 50px' }}>
            <Row>
                <Col lg="9" style={{justifyContent: 'space-evenly', display: 'flex'}}>
                    <img
                        alt=""
                        src={img1}
                        width="350"
                        height="350"
                        style={{ borderRadius: '20px' }}
                        className="d-inline-block align-top"
                    />{' '}
                    <img
                        alt=""
                        src={img1}
                        width="350"
                        height="350"
                        style={{ borderRadius: '20px' }}
                        className="d-inline-block align-top"
                    />{' '}
                </Col>
                <Col lg="2">
                    <h4 style={{ textAlign: 'center' }}>Sponsered</h4>
                    <h6>Sponsered add 1</h6>
                    <h6>Sponsered add 2</h6>
                    <h6>Sponsered add 3</h6>
                    <h6>Sponsered add 4</h6>
                    <h6>Sponsered add 5</h6>
                    <h6>Sponsered add 6</h6>
                </Col>
            </Row>
        </div>
    )
}
