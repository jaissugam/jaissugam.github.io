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
                title='Book Recommendation System' 
                gitlink='https://github.com/jaissugam/Book-Recommendation-System' 
                weblink='http://bookishh.ml/'
                info='The webapp and the underlying recommender model works to recommend content-wise most similar books upon input using Cosine Similarity.'></Project>
                <Project 
                title='Offensive Texts Classification' 
                gitlink='https://github.com/jaissugam/Offensive-Text-Identification' 
                weblink='http://offlang.pythonanywhere.com/'
                info='It implements classification models like Naive Bayes and LSTM to classify offensive tweets.'></Project>
                <Project 
                title='Movie Box Office Prediction' 
                gitlink='https://github.com/jaissugam/Movie-Box-Office-Prediction-using-SVM' 
                info='The project uses Support Vector Machines(SVM) Regression model to predict the box-office collection of movies.'></Project>
                <Project 
                pic={spacex}
                title='SpaceX WebApp' 
                gitlink='https://github.com/jaissugam/React-spaceX-App' 
                weblink='https://spacex1.netlify.app/'
                info='The app is built to provide a user interface to access the list of programs conducted by SpaceX since 2015.The data is taken from the publicly available spaceX API and the total of 4 apis have been used to implement vaious filters.'></Project>
                <Project 
                title='Lane Line Detection System' 
                gitlink='https://github.com/jaissugam/Lane-Line-Detection' 
                info='The project presents a Python program running on OpenCV library. The compiled program detects the lane markers on the road adaptable in both picture and video formats.'></Project>
                <Project 
                title='ToDo List' 
                gitlink='https://github.com/jaissugam/todolist' 
                weblink='https://jaissugam.github.io/todolist/'
                info='Simple todo web app with basic vue implementation Vue is a front-end JS framework which provides flexibility in UI designing.'></Project>
                
            </Card.Body>
        </Card>
    );
}

export default Projects;