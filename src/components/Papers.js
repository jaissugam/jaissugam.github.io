import {Card} from 'react-bootstrap';
import Project from './Project';
import './Project.css';

const Papers = () => {
    return (
        <Card className="papers">
            <Card.Header as="h5" style={{textAlign:'center'}}>Recent Publications</Card.Header>
            <Card.Body style={{backgroundColor:"#343a40"}}>
                <Project 
                    title='Building Personality-Adaptive Conversational AI for Mental Health Therapy' 
                    gitlink='https://dl.acm.org/doi/pdf/10.1145/3698587.3701489' 
                    weblink='https://dl.acm.org/doi/abs/10.1145/3698587.3701489'
                    info='Proceedings of the 15th ACM International Conference on Bioinformatics, Computational Biology and Health Informatics, Schenzhen, China (2024/11/22)'
                    text1 = "Read PDF"
                    text2 = "Cite here">
                    
                </Project>
                <Project 
                    title='iCare-An AI-Powered Virtual Assistant for Mental Health' 
                    gitlink='https://ieeexplore.ieee.org/abstract/document/10628911'
                    info='2024 IEEE 12th International Conference on Healthcare Informatics, Orlando, Florida, USA (2024/6/1)'
                    text1 = "Read PDF"
                    text2 = "Cite here">
                    
                </Project>
                <Project 
                    title='Assessing Empathy in Mental Health Caregivers using Conversational AI' 
                    gitlink='https://ieeexplore.ieee.org/abstract/document/10628734' 
                    info='2024 IEEE 12th International Conference on Healthcare Informatics, Orlando, Florida, USA (2024/6/1)'
                    text1 = "Read PDF"
                    text2 = "Cite here">
                
                </Project>
                
            </Card.Body>
        </Card>
    );
}

export default Papers;
