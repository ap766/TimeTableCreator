import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Row, Col } from 'react-bootstrap';


function Footer() {

    var style = {
        backgroundColor: "#242729",
        color: "grey",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        left: "0",
        bottom: "0",
        height: "100px",
        width: "100%",
    }

    var phantom = {
        backgroundColor: "Gainsboro",
        display: 'block',
        padding: '',
        height: "",
        width: '100%',
    }

    return (
        <div>
            <div style={phantom} />

            <div style={style}>

                <Row >
                    <Col sm={4}>
                        <Row className="ml-auto ">
                            <p><small>Time Table Creator</small></p>
                        </Row>
                    </Col>
                    <Col className="ml-3" >
                   Our program makes use of 2 scheduling algorithms , AlgorithmB is used as the backup for AlgorithmA
                       
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Footer
