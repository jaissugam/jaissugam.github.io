import {Card,Container,Row,Col} from 'react-bootstrap';
import './Skills.css';
const Skills=()=>{
    return (
        <Card className="skills">
            <Card.Header as="h5" style={{textAlign:'center'}}>Tech and Me</Card.Header>
            <Card.Body>
            <Container>
                <Row>
                    <Col xs={12} md={8} style={column} className="a" >
                    Web Development
                    </Col>
                    <Col xs={6} md={4} style={column} className="b">
                    JavaScript
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4} style={column} className="c">
                    React JS
                    </Col>
                    <Col xs={6} md={4} style={column} className="d">
                    MySQL
                    </Col>
                    <Col xs={6} md={4} style={column} className="e">
                    Git and Github
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} style={column} className="f">C++</Col>
                    <Col xs={6} style={column} className="g">JAVA</Col>
                </Row>
            </Container>
            </Card.Body>
        </Card>
    );
}
const column={
    margin:"auto",
    padding:"10px",
    color:"white",
    border:"2px solid black",
    borderRadius:"30px",
    textAlign:"center",
    font:"20px",
    height:"50px"
}
export default Skills;