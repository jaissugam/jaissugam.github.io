import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import profile from '../pics/profile.jpg';
import '../App.css';

const Home=()=>{
    return(
        <div className="outro">
            <Container>
                <Row>
                    <Col sm={8}>
                        <div className="intro">
                            <div>
                                <img src={profile} alt="" width="250" height="250"/>
                            </div>
                            <div>
                                <h4>Computer Science Student</h4>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                    <h2>“Magic is believing in yourself. If you can make that happen, you can make anything happen.” – Johann Wolfgang Von Goethe </h2>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
export default Home;