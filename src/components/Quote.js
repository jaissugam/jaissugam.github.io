import {Card} from 'react-bootstrap';
import './Quote.css';
const collection=[
    ['Magic is believing in yourself. If you can make that happen, you can make anything happen.','Johann Wolfgang Von Goethe'],
    ['If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.','Steve Jobs'],
    ['Whether You Think You Can Or Think You Can’t, You’re Right.','Henry Ford'],
    ['You can’t use up creativity. The more you use, the more you have.','Maya Angelou'],
    ['The man on top of the mountain didn’t fall there.','Vince Lombardi'],
    ['Nothing is really work unless you would rather be doing something else.','J.M. Barrie'],
    ['Done is better than perfect.','Sheryl Sandberg'],
    ['If you don\'t value your time, neither will others. Stop giving away your time and talents--start charging for it.','Kim Garst'],
    ['Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.','Nathaniel Hawthorne']
];
const Quote=()=>{
    const num=Math.floor(Math.random() * 5);
    return (
        <Card style={quote} className="quote">
            <Card.Header className="head">Quote Of The Day</Card.Header>
            <Card.Body className="body">
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    {collection[num][0]}
                    {' '}
                </p>
                <footer className="blockquote-footer">
                    <cite title="Source Title">{collection[num][1]} </cite>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}
const quote={
    margin:'auto',
    maxWidth:'80%'
}
export default Quote;