import React from 'react'
import './navbar.css'
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
import trending from '../../assets/trending.png'
import community from '../../assets/community.png'
import contribute from '../../assets/contribute.png'
import contact from '../../assets/contact.png'


const Navbars = () => {
    return (
        <>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-dark navbar-dark mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            hidden Valley
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            className="bg-dark color-white"
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='navbarBrand'>
                                    <a href='/reg'>Welcome back!!</a>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className=' bg-dark navbar-dark'>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href='/homePage'>
                                        <img
                                            alt=""
                                            src={home}
                                            width="20"
                                            height="20"
                                            className="d-inline-block align-top"
                                        />{' '}
                                        Home</Nav.Link>
                                    <Nav.Link>
                                        <img
                                            alt=""
                                            src={trending}
                                            width="20"
                                            height="20"
                                            className="d-inline-block align-top"
                                        />{' '}
                                        Trending </Nav.Link>

                                    <Nav.Link>
                                        <img
                                            alt=""
                                            src={community}
                                            width="20"
                                            height="20"
                                            className="d-inline-block align-top"
                                        />{' '}
                                        Community</Nav.Link>

                                    <Nav.Link>
                                        <img
                                            alt=""
                                            src={contact}
                                            width="20"
                                            height="20"
                                            className="d-inline-block align-top"
                                        />{' '}
                                        Contact Us</Nav.Link>
                                    <Button variant="success">Login</Button>{' '}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Navbars