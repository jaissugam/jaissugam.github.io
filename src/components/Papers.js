import {Card} from 'react-bootstrap';
import Project from './Project';
import './Project.css';

const Papers = () => {
    return (
        <Card className="papers">
            <Card.Header as="h5" style={{textAlign:'center'}}>Recent Publications</Card.Header>
            <Card.Body style={{backgroundColor:"#343a40"}}>
                <Project 
                    title='Paper Title 1' 
                    gitlink='https://github.com/jaissugam/Paper1' 
                    weblink='https://example.com/paper1'
                    info='Description of Paper 1'>
                    
                </Project>
                <Project 
                    title='Paper Title 2' 
                    gitlink='https://github.com/jaissugam/Paper2' 
                    weblink='https://example.com/paper2'
                    info='Description of Paper 2'>
                    
                </Project>
                <Project 
                    title='Paper Title 3' 
                    gitlink='https://github.com/jaissugam/Paper3' 
                    weblink='https://example.com/paper3'
                    info='Description of Paper 3'>
                
                </Project>
                <Project 
                    title='Paper Title 3' 
                    gitlink='https://github.com/jaissugam/Paper3' 
                    weblink='https://example.com/paper3'
                    info='Description of Paper 3'>
                
                </Project>
            </Card.Body>
        </Card>
    );
}

export default Papers;
