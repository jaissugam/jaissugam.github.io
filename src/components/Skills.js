import {Card,Container,Row,Col} from 'react-bootstrap';
const Skills=()=>{
    return (
        <Card>
            <Card.Header as="h5">Tech and Me</Card.Header>
            <Card.Body>
            <Container>
                <Row>
                    <Col xs={12} md={8} style={column}>
                    Web Development
                    </Col>
                    <Col xs={6} md={4} style={column}>
                    JavaScript
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4} style={column}>
                    React JS
                    </Col>
                    <Col xs={6} md={4} style={column}>
                    MySQL
                    </Col>
                    <Col xs={6} md={4} style={column}>
                    Git and Github
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} style={column}>C++</Col>
                    <Col xs={6} style={column}>JAVA</Col>
                </Row>
            </Container>
            </Card.Body>
        </Card>
    );
}
const column={
    margin:"auto",
    padding:"10px",
    backgroundColor:"lightblue",
    color:"white",
    border:"3px solid white",
    textAlign:"center",
    font:"20px",
    height:"50px"
}
export default Skills;