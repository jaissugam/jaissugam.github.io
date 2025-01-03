import React from 'react';
import {Card} from 'react-bootstrap';
import './Project.css';
const Project=(props)=>{
    if(!props.weblink){
        return (
        <div className="project">
            <Card style={{backgroundColor:'#343a40',margin:'2%',border:'2px solid rgb(219, 199, 163)'}}>
                
                <Card.Body style={{color:'white'}}>
                    <Card.Title style={{display:'inline-block',borderRadius:'10px',padding:'15px',border:'2px solid rgb(219, 199, 163)'}}>{props.title}</Card.Title>
                    <Card.Text>
                    {props.info}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link target='_blank' href={props.gitlink}>{props.text2}</Card.Link>
                </Card.Body>
            </Card>
        </div>

    );
    }
    return (
        <div className="project">
            <Card style={{backgroundColor:'#343a40',margin:'2%',border:'2px solid rgb(219, 199, 163)'}}>
                
                <Card.Body style={{color:'white'}}>
                    <Card.Title style={{display:'inline-block',borderRadius:'10px',padding:'15px',border:'2px solid rgb(219, 199, 163)'}}>{props.title}</Card.Title>
                    <Card.Text>
                    {props.info}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link target='_blank' href={props.gitlink}>{props.text2}</Card.Link>
                    <Card.Link target='_blank' href={props.weblink}>{props.text1}</Card.Link>
                </Card.Body>
            </Card>
        </div>

    );
}

export default Project;