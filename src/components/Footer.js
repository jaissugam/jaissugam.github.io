import {Card,ListGroup} from 'react-bootstrap';
import './Footer.css';
const Footer=()=>{
    return (
        <Card className="foot">
            <Card.Header as="h5">If you wanna connect</Card.Header>
            <Card.Body style={mycard}>
            <ListGroup horizontal>
                <ListGroup.Item ><a style={{color:'blue'}} rel="noreferrer" target='_blank' href='https://www.facebook.com/sugam.jaiswal'><i className="fab fa-facebook fa-3x fa-spin"></i></a></ListGroup.Item>
                <ListGroup.Item ><a style={{color:'#bc2a8d'}} rel="noreferrer" target='_blank' href='https://www.instagram.com/sgm4u/'><i className="fab fa-instagram fa-3x fa-spin"></i></a></ListGroup.Item>
                <ListGroup.Item ><a style={{color:'#00acee'}} rel="noreferrer" target='_blank' href='https://twitter.com/itsmesugam'><i className="fab fa-twitter-square fa-3x fa-spin"></i></a></ListGroup.Item>
                <ListGroup.Item ><a style={{color:'black'}} rel="noreferrer" target='_blank' href='https://github.com/jaissugam'><i className="fab fa-github-square fa-3x fa-spin"></i></a></ListGroup.Item>
                <ListGroup.Item ><a style={{color:'#0e76a8'}} rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/sugam-jaiswal-31a27a1a3/'><i className="fab fa-linkedin fa-3x fa-spin"></i></a></ListGroup.Item>
            </ListGroup>
            <Card.Subtitle style={{marginTop:'10px',color:'whitesmoke'}}>Crafted by sgm with 💓</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}
const mycard={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
}
export default Footer;