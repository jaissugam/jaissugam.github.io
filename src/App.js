import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';

const App=()=>{
 return(
   <div>
     <Router>
        <Header></Header>
        <Route path="/" exact component={Home}></Route>
        <Route path="/" exact component={Skills}></Route>
        <Route path="/" exact component={Projects}></Route>
        <Route path="/" exact component={About}></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/about" component={About}></Route>
        <Footer></Footer>
     </Router>
   </div>
 );
}
export default App;
