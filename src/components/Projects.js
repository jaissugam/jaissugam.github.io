import {Card} from 'react-bootstrap';
import Project from './Project';
import spacex from '../pics/spacex.png';
import './Project.css';
const Projects=()=>{
    return (
        <Card className="projects">
            <Card.Header as="h5" style={{textAlign:'center'}}>Mapping the skills to use</Card.Header>
            <Card.Body style={{backgroundColor:"#343a40"}}>
            <Project 
                title='Movie Box Office Prediction' 
                gitlink='https://github.com/jaissugam/Movie-Box-Office-Prediction-using-SVM' 
                info='The project uses Support Vector Machines(SVM) Regression model to predict the box-office collection of movies.'></Project>
                <Project 
                title='Offensive Texts Classification' 
                gitlink='https://github.com/jaissugam/Offensive-Text-Identification' 
                info='It implements classification models like Naive Bayes and LSTM to classify offensive tweets.'></Project>
                <Project 
                pic={spacex}
                title='SpaceX WebApp' 
                gitlink='https://github.com/jaissugam/React-spaceX-App' 
                weblink='https://spacex1.netlify.app/'
                info='The app is built to provide a user interface to access the list of programs conducted by SpaceX since 2015.The data is taken from the publicly available spaceX API and the total of 4 apis have been used to implement vaious filters.'></Project>
                 <Project 
                title='ToDo List' 
                gitlink='https://github.com/jaissugam/todolist' 
                weblink='https://jaissugam.github.io/todolist/'
                info='Simple todo web app with basic vue implementation Vue is a front-end JS framework which provides flexibility in UI designing.'></Project>
                <Project 
                title='Lane Line Detection System' 
                gitlink='https://github.com/jaissugam/Lane-Line-Detection' 
                info='The project presents a Python program running on OpenCV library. The compiled program detects the lane markers on the road adaptable in both picture and video formats.'></Project>
                <Project 
                title='Optimized CPU scheduling algorithm' 
                gitlink='https://github.com/jaissugam/Mini-Projects-collection/tree/master/Optimized%20CPU%20Scheduling' 
                info='The proposed algorithm for real time systems is a combination of priority and round-robin CPU scheduling algorithms. It combines the merits of round robin, like elimination of starvation, and priority scheduling.'></Project>
            </Card.Body>
        </Card>
    );
}

export default Projects;