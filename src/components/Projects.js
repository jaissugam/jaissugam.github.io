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
                title='Grade Calculation System' 
                gitlink='https://github.com/jaissugam/Grade-Calculation-System' 
                weblink='https://calcgrade.000webhostapp.com/'
                info='This is a simple webpage made up with html, css, php and mysql to implement a grade calculation and management in schools and colleges. '></Project>
                <Project 
                title='Dummy Youtube' 
                gitlink='https://github.com/jaissugam/Dummy_youtube' 
                info='A react app which uses Youtube Data API to show and play searched youtube videos.'></Project>
                <Project 
                title='Optimized CPU scheduling algorithm' 
                gitlink='https://github.com/jaissugam/Mini-Projects-collection/tree/master/Optimized%20CPU%20Scheduling' 
                info='The proposed algorithm for real time systems is a combination of priority and round-robin CPU scheduling algorithms. It combines the merits of round robin, like elimination of starvation, and priority scheduling.'></Project>
            </Card.Body>
        </Card>
    );
}

export default Projects;