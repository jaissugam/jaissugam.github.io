import {Card,Button} from 'react-bootstrap';
import './about.css';
import resume from './Resume.pdf';
const About=()=>{
    return (
        <Card className="about">
            <Card.Header as="h5" style={{textAlign:'center'}}><span></span></Card.Header>
            <Card.Body>
                <Card.Title style={{fontFamily: 'Caveat',fontSize:'30px'}}>I'm a Computer Science Student having Bachelor's degree in CSE from VIT('22), India and currently pursuing a Master's degree in CSSE at UW('24'). I'm in this field of work because I like exploring the tech world and I enjoy the tech world as I'm in this field.I'm highly interested in software development side of things and specifically my passion lies towards the fields of Web Development and Artificial Intelligence.  </Card.Title>
                
                <Button variant="primary" style={{borderRadius:'5px',color:'rgb(219, 199, 163)',backgroundColor:'black',fontSize:'1.5rem'}}><a target="_blank" rel="noreferrer" href={resume}>View my Resume</a></Button>
            </Card.Body>
        </Card>
    );
}
export default About;