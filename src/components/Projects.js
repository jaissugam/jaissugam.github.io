import {Card} from 'react-bootstrap';
import Project from './Project';
import spacex from '../pics/spacex.png';
import './Project.css';
const Projects=()=>{
    return (
        <Card className="projects">
            <Card.Header as="h5" style={{textAlign:'center'}}>Past projects</Card.Header>
            <Card.Body style={{backgroundColor:"#343a40"}}>
            <Project 
                title='Book Recommendation System' 
                gitlink='https://github.com/jaissugam/Book-Recommendation-System' 
                weblink='https://sugamjais.pythonanywhere.com/'
                text2 = "Github"
                text1 = "Website"
                info='The webapp and the underlying recommender model works to recommend content-wise most similar books based on input using Cosine Similarity.'>

            </Project>
            <Project 
                title='Scalable Image Recognition using Vocabulary Tree' 
                gitlink='https://github.com/jaissugam/Scalable-Recognition-using-Vocabulary-Tree' 
                text2 = "Github"
                text1 = "Website"
                info='The project implements heirarchical k-means clustering and CV feature detector algorithms to create enhanced Vocabulary Trees for Real-Time Object Recognition in Image and Video Streams'>
                
            </Project>
            <Project 
                title='Offensive Texts Classification' 
                gitlink='https://github.com/jaissugam/Offensive-Text-Identification' 
                weblink='http://offlang.pythonanywhere.com/'
                text2 = "Github"
                text1 = "Website"
                info='It implements classification models like Naive Bayes and LSTM to classify offensive tweets, and provides an interactive UI for the same.'>

            </Project>
            <Project 
                pic={spacex}
                title='SpaceX WebApp' 
                gitlink='https://github.com/jaissugam/React-spaceX-App' 
                weblink='https://spacex1.netlify.app/'
                text2 = "Github"
                text1 = "Website"
                info='The app is built to provide a user interface to access the list of programs conducted by SpaceX since 2015.The data is taken from the publicly available spaceX API and the total of 4 APIs were used to implement vaious filters.'>

            </Project>
            <Project 
                title='ToDo List' 
                gitlink='https://github.com/jaissugam/todolist' 
                weblink='https://jaissugam.github.io/todolist/'
                text2 = "Github"
                text1 = "Website"
                info='Simple TODO Web application with basic Vue JS implementation.'>

            </Project>
                
            </Card.Body>
        </Card>
    );
}

export default Projects;