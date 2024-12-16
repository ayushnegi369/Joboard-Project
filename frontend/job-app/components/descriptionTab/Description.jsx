// import React from "react";
import "./Description.css";
import AboutJob from "../descriptionTab/AboutJob";
import SearchBar from "../descriptionTab/SearchBar";

const Description = () => {
    return (
        <>
            <div className="container-fluid searchbox">
                <div className="row">
                    <div className="col">
                        <SearchBar />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <AboutJob />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Description;
