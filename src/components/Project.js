import React from 'react';
import {Card} from 'react-bootstrap';
const Project=(props)=>{
    return (
        <div>
            <Card >
                
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.info}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link target='_blank' href={props.gitlink}>Github</Card.Link>
                    <Card.Link target='_blank' href={props.weblink}>Website</Card.Link>
                </Card.Body>
            </Card>
        </div>

    );
}
export default Project;