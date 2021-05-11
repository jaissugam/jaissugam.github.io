import {Card,ListGroup} from 'react-bootstrap';

const Footer=()=>{
    return (
        <Card>
            <Card.Header as="h5">If you wanna connect</Card.Header>
            <Card.Body>
            <ListGroup horizontal>
                <ListGroup.Item>This</ListGroup.Item>
                <ListGroup.Item>ListGroup</ListGroup.Item>
                <ListGroup.Item>renders</ListGroup.Item>
                <ListGroup.Item>horizontally!</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
    );
}
export default Footer;