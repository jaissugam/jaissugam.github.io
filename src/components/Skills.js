import {Card,Container,Row,Col} from 'react-bootstrap';
import './Skills.css';
const Skills=()=>{
    return (
        <Card className="skills">
            <Card.Header as="h5" style={{textAlign:'center'}}>Some Tech I excel at...</Card.Header>
            <Card.Body>
            <Container>
                <Row>
                    <Col xs={12} md={8} style={column} className="a" >
                    Generative AI
                    </Col>
                    <Col xs={6} md={4} style={column} className="b">
                    Python
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs={6} md={4} style={column} className="c">
                    Linux
                    </Col>
                    <Col xs={6} md={4} style={column} className="b">
                    Django
                    </Col>
                    <Col xs={6} md={4} style={column} className="a">
                    Docker
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs={6} style={column} className="c">Natural Language Processing</Col>
                    <Col xs={6} style={column} className="b">Scikit-Learn</Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs={6} md={4} style={column} className="b">
                    REST APIs
                    </Col>
                    <Col xs={6} md={4} style={column} className="a">
                    GCP
                    </Col>
                    <Col xs={6} md={4} style={column} className="c">
                    SQL
                    </Col>
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