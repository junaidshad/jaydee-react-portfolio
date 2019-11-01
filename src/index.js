import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Intro from "./components/Intro";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Intro/>
                <AboutMe/>
                <Experience/>
                <Education/>
                <Projects/>
                <Skills/>
                <ContactInfo/>
                <Footer/>
            </div>

        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));