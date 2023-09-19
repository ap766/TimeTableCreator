import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, OverlayTrigger, Popover, Nav, Navbar, Carousel, Button } from 'react-bootstrap';

import { Switch } from 'react-router-dom';

const scrollToRef = () => window.scrollTo({
    top: 550,
    behavior: 'smooth'
});


function Header() {

    const executeScroll = () => scrollToRef()


    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h2">How to use ?</Popover.Title>
            <Popover.Content>
                <p>You just need to fill the details.
                And click over the button given below.
                The time table for your school/college
                will be ready and presented to you.
                </p>
            </Popover.Content>
        </Popover>
    );

    const popover1 = (
        <Popover id="popover-basic">
            <Popover.Title as="h2">Time Table Creator</Popover.Title>
            <Popover.Content>
                <p>Created using reactjs</p>
            </Popover.Content>
        </Popover>
    );

    return (
        <div responsive="true">
            <Navbar collapseOnSelect expand="sm" fixed="top" style={{ overflow: "hidden", float: "left", height: "200", backgroundColor: "black" }} bg="dark" variant="dark" className="mr-auto">

           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                       
                        <Nav.Link eventKey="1" >
                            <Button variant="outline-light" onClick={executeScroll} className="mr-4"> Get Started </Button>
                        </Nav.Link>

                        <Nav.Link>

                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <Button variant="outline-light" className="mr-4">How to use
                                </Button>
                            </OverlayTrigger>

                        </Nav.Link>
                    </Nav>


                    <Nav className="ml-auto">

                        <Nav.Link>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
                                <Button variant="outline-warning" className="mr-4" >About Project</Button>
                            </OverlayTrigger>
                        </Nav.Link>

                 </Nav>
                </Navbar.Collapse>
            </Navbar>

           

            <Carousel fade style={{ position: "relative" }}>

                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1617175093937-1eef16d106e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE4NTI2NjYx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
                        alt="First slide"
                        height="450"
                        width="100%"
                    />
                    <Carousel.Caption style={{ color: "black", position: "absolute" }}>

                        <h1><strong>The time table Creator Website</strong></h1>
                        <h3>Create your time table the AI way.</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                {/* </div> */}
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                        height="450"
                        width="100%"
                    />

                    <Carousel.Caption style={{ color: "black" }}>
                        <h1><strong>The time table Creator Website</strong></h1>
                        <h3>Create your time table the AI way.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/14763406/pexels-photo-14763406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                        height="450"
                        width="100%"
                    />

                    <Carousel.Caption style={{ color: "black" }}>
                        <h1><strong>The time table Creator</strong></h1>
                        <h3>Create your time table the AI way.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x900/? space"
                        alt="Third slide"
                        height="450"
                        width="100%"
                    />

                    <Carousel.Caption style={{ color: "black" }}>
                        <h1><strong>The time table Creator Website</strong></h1>
                        <h3>Create your time table the AI way.</h3>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x900/? pen"
                        alt="Third slide"
                        height="450"
                        width="100%"
                    />

                    <Carousel.Caption style={{ color: "black" }}>
                        <h1><strong>The time table Creator Website</strong></h1>
                        <h3>Create your time table the AI way.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                        height="450"
                        width="100%"
                    />

                    <Carousel.Caption style={{ color: "black" }}>
                        <h1><strong>The time table Creator Website</strong></h1>
                        <h3>Create your time table the AI way.</h3>
                    </Carousel.Caption>


                </Carousel.Item>
            </Carousel>




        </div >
    )
}

export default Header

