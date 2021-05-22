import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';

const App=()=>{
 return(
   <div>
        <Header></Header>
        <Home id="home"></Home>
        <Skills id="skills"></Skills>
        <Projects id="projects"></Projects>
        <About id="about"></About>
        <Footer id="footer"></Footer>
   </div>
 );
}
export default App;
