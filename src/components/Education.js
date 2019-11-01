import React from 'react';
import '../css/style.css';

const Education = () => {
    return (
        <div id="education">
            <h2 className="heading">Education</h2>
            <div className="education-block">
                <h3>Capital University of Science and Technology, Islamabad.</h3>
                <span className="education-date">July 2013 - Dec 2017</span>
                <h4>Bachelor of Science in Computer Science</h4>
                <ul>
                    <li>
                        Final Year Project Supervisor: Dr. Abdul Qadir (Dean Faculty of Computer Science).
                    </li>

                </ul>
            </div>

            <div className="education-block">
                <h3>F.G. Quaid e Azam Degree College for Boys | Chaklala Scheme 3 Rawalpindi, Pakistan.</h3>
                <span className="education-date">2011 - 2013</span>
                <h4>Pre-Engineering, Fsc.</h4>

            </div>
            <div className="education-block">
                <h3>Army Public School and College for Boys | Ordnance Road Rawalpindi, Pakistan</h3>
                <span className="education-date">2009 - 2011</span>
                <h4>Matric, Science.</h4>

            </div>
        </div>
    );
};

export default Education;