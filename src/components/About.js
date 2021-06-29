import {Card,Button} from 'react-bootstrap';
import './about.css';
import resume from './Resume.pdf';
const About=()=>{
    return (
        <Card className="about">
            <Card.Header as="h5" style={{textAlign:'center'}}><span></span></Card.Header>
            <Card.Body>
                <Card.Title style={{fontFamily: 'Caveat',fontSize:'30px'}}>I'm a Computer Science Student from Nepal currently studying in VIT, India.I'm in this field of work because I like exploring the tech world and I enjoy the tech world since I'm in this field.I'm highly interested in software development side of things and specifically my enthusiasm lies towards the field of Web Development and Artificial Intelligence.Currently, I'm bettering myself to become a competent Web Developer.  </Card.Title>
                
                <Button variant="primary" style={{borderRadius:'5px',color:'rgb(219, 199, 163)',backgroundColor:'black',fontSize:'1.5rem'}}><a target="_blank" rel="noreferrer" href={resume}>View my Resume</a></Button>
            </Card.Body>
        </Card>
    );
}
export default About;