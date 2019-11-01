import React from 'react';
import '../css/style.css';


const Experience =() => {
    return (
        <div id="experience" className="background-alt">
        <h2 className="heading">Experience</h2>
        <div id="experience-timeline">
            <div data-date="September 2017 – Present">
                <h3>Zoy Solutions</h3>
                <h4>Unity3D Game Developer</h4>
                <p>
                    Currently working as a Game Developer in the organization with various responsibilities and
                    producing innovative ideas in game development industry.
                    Developed and published multiple games on PlayStore with successful ratings.
                </p>
            </div>
            <div data-date="July 2017 – September 2017">
                <h3>Technokeet Pvt Ltd.</h3>
                <h4>Internship - Mobile Application Development</h4>
                <p>
                    Worked in the development of Mobile Application and android games. Hands on Experience with Android
                    Studio for mobile applications. Hands on Experience with Unity3D for mobile games development.
                </p>
            </div>
            <div data-date="July 2016 – September 2016">
                <h3>PTCL - Pakistan Telecommunication Company Limited</h3>
                <h4>Internship - IPTV</h4>
                <p>
                    Learnt and developed networking methods used in the market. Worked in IPTV Department. Packet
                    Switching and VoIP.
                </p>
            </div>
        </div>
    </div>
    );
};

export default Experience;