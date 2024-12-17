import {Card,Button} from 'react-bootstrap';
import './about.css';
import resume from './Resume.pdf';
const About=()=>{
    return (
        <Card className="about">
            <Card.Header as="h5" style={{textAlign:'center'}}><span></span></Card.Header>
            <Card.Body>
                <Card.Title style={{fontFamily: 'Caveat',fontSize:'30px'}}>I am a software engineer with a master's in computer science from the University of Washington ('24) and a bachelor's degree in CSE from the VIT University ('22). I am fascinated by the technological realm and its endless possibilities. I enjoy developing and researching software solutions for various domains, especially web development and artificial intelligence. In simpler words, I am a web aficionado and an AI enthusiast. In my spare time, I like travelling, reading and (at times) cooking! </Card.Title>
                
                <Button variant="primary" style={{borderRadius:'5px',color:'rgb(219, 199, 163)',backgroundColor:'black',fontSize:'1.5rem'}}><a target="_blank" rel="noreferrer" href={resume}>View my Resume</a></Button>
            </Card.Body>
        </Card>
    );
}
export default About;