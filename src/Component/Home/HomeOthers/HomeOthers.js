import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const HomeOthers = () => {

    const [othersfacility, setOthersfacility] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/otherfacility")
            .then(res => res.json())
            .then(data => setOthersfacility(data))
    }, [])
    // console.log(othersfacility);
    return (
        <Container className="mt-5">

            <h2 className="text-center mb-5 company-logo">Our Other Brand Facility</h2>
            <Row xs={2} md={4} className="g-4">
                {
                    othersfacility.map(others => <Col key={others._id} >
                        <Card className="img-container">
                            <img className=" img-fluid" src={others.img} alt="" />
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default HomeOthers;