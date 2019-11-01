import React from 'react';
import '../css/style.css';
import project from '../images/project.jpg';


const Projects = () => {
    return (
        <div id="projects" className="background-alt">
            <h2 className="heading">Projects</h2>
            <div className="container">
                <div className="row">
                    <div className="project shadow-large">
                        <div className="project-image">
                            <img src={project}/>
                        </div>
                        <div className="project-info">
                            <h3>Extreme Race: Impossible Dream Car Race</h3>
                            <p>
                                https://play.google.com/store/apps/details?id=com.zoy.extreme.race.impossible.dream.car.racing
                            </p>
                            <a href="#">View Project</a>
                        </div>
                    </div>

                    <div className="project shadow-large">
                        <div className="project-image">
                            <img src={project}/>
                        </div>
                        <div className="project-info">
                            <h3>House Construction Simualtor Game</h3>
                            <p>
                                https://play.google.com/store/apps/details?id=com.zoy.house.construction.simulator.city
                            </p>
                            <a href="#">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;