import {Card,Button} from 'react-bootstrap';
import './about.css';
import resume from './Resume.pdf';
const About=()=>{
    return (
        <Card className="about">
            <Card.Header as="h5" style={{textAlign:'center'}}><span></span></Card.Header>
            <Card.Body>
                <Card.Title style={{fontFamily: 'Caveat',fontSize:'30px'}}>I am a computer science scholar with a Bachelor’s degree in CSE from VIT'22, India and currently pursuing a Master’s degree in CSSE at UW'24. I am fascinated by the technological realm and its endless possibilities. I enjoy developing software solutions for various domains, especially web development and artificial intelligence. You could say I am a web aficionado and an AI enthusiast.  </Card.Title>
                
                <Button variant="primary" style={{borderRadius:'5px',color:'rgb(219, 199, 163)',backgroundColor:'black',fontSize:'1.5rem'}}><a target="_blank" rel="noreferrer" href={resume}>View my Resume</a></Button>
            </Card.Body>
        </Card>
    );
}
export default About;