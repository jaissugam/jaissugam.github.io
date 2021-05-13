import {Card,Button} from 'react-bootstrap';
const About=()=>{
    return (
        <Card>
            <Card.Header as="h5">Namaste!</Card.Header>
            <Card.Body>
                <Card.Title>I'm a Computer Science Student from Nepal currently studying in VIT, India.I'm in this field of work because I like exploring the tech world and I enjoy the tech world because I'm in this field.I'm highly interested in software development side of things and specifically my enthusiasm lies towards the field of Web Development and Artificial Intelligence.Currently, I'm bettering myself to become a competent Web Developer.  </Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">This</Button>
            </Card.Body>
        </Card>
    );
}
export default About;