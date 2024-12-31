import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Papers from './components/Papers';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Blogs from './components/Blogs';

const App=()=>{
  const Main = () => {
    return (
      <div>
        <Header></Header>
        <Home id="home"></Home>
        <Skills id="skills"></Skills>
        <Projects id="projects"></Projects>
        <Papers id="papers"></Papers>
        <About id="about"></About>
      </div>
    );
  }
 return(
   <Router>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/blogs" component={Blogs} />
        </Switch>
        <Footer></Footer>
   </Router>
 );
}
export default App;
