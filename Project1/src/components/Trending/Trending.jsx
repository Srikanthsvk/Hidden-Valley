import React, { useState } from 'react'

import './trend.css'

import { Card, Col, Row } from 'react-bootstrap'
import img1 from '../../assets/introImg1.jpg'
import img2 from '../../assets/introImg2.jpg'
import img3 from '../../assets/introImg3.jpg'
import img4 from '../../assets/introImg4.jpg'
import img5 from '../../assets/introImg5.jpg'
import img6 from '../../assets/introImg6.jpg'

import like from '../../assets/like.png'
import eye from '../../assets/eye.png'


const cardData = [
    {
        id: 1,
        countLike: 120,
        viewCount: 430,
        imageSrc: img1,
    },
    {
        id: 2,
        countLike: 400,
        viewCount: 730,
        imageSrc: img2,
    },
    {
        id: 3,
        countLike: 386,
        viewCount: 688,
        imageSrc: img3,
    },
    {
        id: 4,
        countLike: 230,
        viewCount: 350,
        imageSrc: img4,
    },
];

export default function Trending() {

    const [isLiked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!isLiked);
    };
    return (
        <div>
            <div style={{ textAlign: 'center', justifyContent: 'center', padding: '20px 50px 20px 50px' }}>
                <h3>Discover the Hottest Destinations Right Now!</h3>
                <h5>Welcome to our Trending section, where we showcase the most popular and talked-about travel destinations. Our real-time Like and View Counts help you stay in the loop about the places that are capturing the imagination of fellow travelers. Whether it's an iconic cityscape, a serene beach, or a hidden gem off the beaten path, Trending is your window into the current pulse of the global travel community.</h5>
            </div>

            <div>
                <Row className='cardsMain' style={{padding: '50px', margin: 0}}>
                    {cardData.map((card) => (
                        <Col lg={3} className='cardsCol' key={card.id}>
                            <Card style={{ width: '16rem', justifyContent: 'center' }} className='cardsNutrition'>
                                <Card.Img variant="top" src={card.imageSrc} style={{ width: '100%', height: '250px' }} />
                                <Card.Body style={{ justifyContent: 'space-around', display: 'flex' , textAlign: 'center', alignItems: 'center'}}>
                                    <div>
                                        <img
                                            alt=""
                                            src={like}
                                            width="35"
                                            height="35"
                                            style={{ borderRadius: '20px' }}
                                            className="d-inline-block align-top"
                                        />{' '}{card.countLike}
                                    </div>
                                    <div>
                                        <img
                                            alt=""
                                            src={eye}
                                            width="35"
                                            height="35"
                                            style={{ borderRadius: '20px' }}
                                            className="d-inline-block align-top"
                                        />{' '}{card.viewCount}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

        </div>
    )
}
