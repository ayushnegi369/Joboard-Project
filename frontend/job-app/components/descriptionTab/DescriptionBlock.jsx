import { useState } from "react";
import { useNoteContext } from "../noteContext/NoteContext";
import "./DescriptionBlock.css";

const DescriptionBlock = () => {
    const { id, title, logo, description, link } = useNoteContext();
    // let myRealLink = "link"; // this variable holds the complete url link

    // to set the bookmark to active state
    const [activeMark,   setActiveMark] = useState(
        "https://img.icons8.com/fluency-systems-regular/48/bookmark-ribbon--v1.png"
    );
    // to handle the bookmark state
    const handleBookmark = () => {
        if (
            activeMark ==
            "https://img.icons8.com/fluency-systems-regular/48/bookmark-ribbon--v1.png"
        ) {
            setActiveMark(
                "https://img.icons8.com/ios-glyphs/48/bookmark-ribbon.png"
            );
        } else {
            setActiveMark(
                "https://img.icons8.com/fluency-systems-regular/48/bookmark-ribbon--v1.png"
            );
        }
    };
    return (
        <>
            <div className="container-fluid pt-2 main">
                <div className="row">
                    <div className="col-1">
                        <img width="45" height="45" src={logo} alt="logo" />
                    </div>
                    <div className="col">
                        <h5>{title}</h5>
                    </div>
                    <div className="col-1">
                        <img
                            width="35"
                            height="35"
                            src={`${activeMark}`}
                            alt="bookmark-ribbon--v1"
                            className="bookmark-ribbon"
                            onClick={handleBookmark}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-1 mb-1">
                        <b>Project Overview</b>
                    </div>
                </div>
                <div className="row">
                    <div className="col">{description}</div>
                </div>
                <div className="row mt-2">
                    <div className="col">
                        <p>
                            <b>Skill and Expertise</b>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex">
                        <p className="jobskills">UI Designer</p>
                        <p className="jobskills">UI/UX</p>
                        <p className="jobskills">Rust</p>
                        <p className="jobskills">Game Developer</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>
                            <b>Project Details</b>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>5.00 of 48 reviews</p>
                    </div>
                    <div className="col">
                        <p>28 success project</p>
                    </div>
                    <div className="col">
                        <p>$60k+ total spent</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img
                            width="15"
                            height="15"
                            src="https://img.icons8.com/fluency/48/star--v1.png"
                            alt="star--v1"
                        />
                        <img
                            width="15"
                            height="15"
                            src="https://img.icons8.com/fluency/48/star--v1.png"
                            alt="star--v1"
                        />
                        <img
                            width="15"
                            height="15"
                            src="https://img.icons8.com/fluency/48/star--v1.png"
                            alt="star--v1"
                        />
                        <img
                            width="15"
                            height="15"
                            src="https://img.icons8.com/fluency/48/star--v1.png"
                            alt="star--v1"
                        />
                        <img
                            width="15"
                            height="15"
                            src="https://img.icons8.com/fluency/48/star--v1.png"
                            alt="star--v1"
                        />
                    </div>
                    <div className="col d-flex">
                        <img
                            width="15"
                            height="15"
                            src="https://img.icons8.com/color/48/verified-badge.png"
                            alt="verified-badge"
                        />
                        <p className="verified">Project Verified</p>
                    </div>
                    <div className="col d-flex">
                        <img
                            width="15"
                            height="15"
                            src="https://img.icons8.com/color/48/verified-badge.png"
                            alt="verified-badge"
                        />
                        <p className="verified">Payment Verified</p>
                    </div>
                    <div className="row links">
                        <div className="col-7 clipboard">
                            <p className="joblink">
                                {link.substring(0, 40) + "..."}
                            </p>
                        </div>
                        <div className="col">
                            <button className="submitBtn">
                                Submit a Proposal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DescriptionBlock;
