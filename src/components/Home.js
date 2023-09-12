import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import profile from '../pics/profile.jpeg';
import Quote from './Quote';
import Slider from './Slider';
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
                            <br></br>
                            <div>
                                <Slider></Slider>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                    <Quote></Quote>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
export default Home;