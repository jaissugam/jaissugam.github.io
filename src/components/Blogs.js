import {Card} from 'react-bootstrap';
import Project from './Project';
import './Project.css';

const link={
    marginRight:"10px",
    marginLeft:"10px",
    color: '#343a40'
}

const Blogs = () => {
    return (
        <Card className="projects">
            <div>
                <a style={link} rel="noreferrer" href='/'>Go back to Portfolio</a>
            </div>
            <Card.Header as="h5" style={{textAlign:'center'}}>Coming soon!</Card.Header>
            <Card.Body style={{backgroundColor:"#343a40"}}>
            {/* <Project 
                title='Book Recommendation System' 
                gitlink='https://github.com/jaissugam/Book-Recommendation-System' 
                weblink='https://sugamjais.pythonanywhere.com/'
                text2 = "Github"
                text1 = "Website"
                info='The webapp and the underlying recommender model works to recommend content-wise most similar books based on input using Cosine Similarity.'>

            </Project> */}
                
            </Card.Body>
        </Card>
    );
}

export default Blogs;