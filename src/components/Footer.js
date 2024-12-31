import {Card,ListGroup} from 'react-bootstrap';
import './Footer.css';
const Footer=()=>{
    return (
        <Card className="foot">
            <Card.Header as="h5" style={{textAlign:'center'}}>Let's connect at...</Card.Header>
            <Card.Body style={mycard}>
            <ListGroup horizontal>
                <ListGroup.Item ><a style={{color:'#0e76a8'}} rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/sugam-jaiswal'><i className="fab fa-linkedin fa-1.5x"></i></a></ListGroup.Item>
                <ListGroup.Item ><a style={{color:'black'}} rel="noreferrer" target='_blank' href='https://github.com/jaissugam'><i className="fab fa-github fa-1.5x"></i></a></ListGroup.Item>
                <ListGroup.Item ><a style={{color:'black'}} rel="noreferrer" target='_blank' href='https://scholar.google.com/citations?user=mISYzdgAAAAJ&hl=en'><i className="fab fa-google fa-1.5x"></i></a></ListGroup.Item>
                <ListGroup.Item ><a style={{color:'#00acee'}} rel="noreferrer" target='_blank' href='https://twitter.com/itsmesugam'><i className="fab fa-twitter fa-1.5x"></i></a></ListGroup.Item>
                {/* <ListGroup.Item ><a style={{color:'blue'}} rel="noreferrer" target='_blank' href='https://www.facebook.com/sugam.jaiswal'><i className="fab fa-facebook fa-1.5x"></i></a></ListGroup.Item> */}
                <ListGroup.Item ><a style={{color:'#bc2a8d'}} rel="noreferrer" target='_blank' href='https://www.instagram.com/sgm4u/'><i className="fab fa-instagram fa-1.5x"></i></a></ListGroup.Item>
                <ListGroup.Item ><a style={{color:'#0e76a8'}} rel="noreferrer" href='/#/blogs'><i className="fas fa-blog fa-1.5x"></i></a></ListGroup.Item>
                <ListGroup.Item ><a style={{color:'#0e76a8'}} rel="noreferrer" target="_blank" href='mailto:sgmjaiswal@gmail.com'><i className="fas fa-envelope fa-1.5x"></i></a></ListGroup.Item>
            </ListGroup>
            <Card.Subtitle style={{marginTop:'10px'}}>Crafted by sgm with 💓</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}
const mycard={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'no-wrap'
}
export default Footer;