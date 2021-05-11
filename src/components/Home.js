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
                                <p>Computer Science Student</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis sapien viverra, sollicitudin ligula vel, vehicula tortor. Nam ullamcorper velit ac nibh congue laoreet. Proin at faucibus tortor. Morbi vel ligula et est molestie placerat quis facilisis purus. Fusce a pharetra nulla. Nullam egestas ornare quam, id bibendum arcu eleifend in. Aenean interdum ante orci. Mauris rhoncus dui purus, ut mattis dolor volutpat non. Morbi tempor mauris risus, quis congue odio tempor facilisis. Integer at condimentum purus. Cras tellus nisl, blandit sodales diam quis, pharetra pretium libero. 
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
export default Home;