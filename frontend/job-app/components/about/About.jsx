// import React from "react";
import "./About.css";

const About = () => {
    return (
        <>
            <div className="container-fluid availibilitybox">
                <div className="row mt-2">
                    <div className="col">
                        <h6>Availibility</h6>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="available">🔥Available for Work</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h6>Connect & Amount</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col connect">
                            <p>18 Available Connects</p>
                            <p>2 Submitted Proposals</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h6>Skills and Expertise</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex skillset">
                            <p className="skills">UI/UX</p>
                            <p className="skills">Python</p>
                            <p className="skills">React</p>
                            <p className="skills">Ruby</p>
                            <p className="skills">Python</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <button className="about-btn">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
