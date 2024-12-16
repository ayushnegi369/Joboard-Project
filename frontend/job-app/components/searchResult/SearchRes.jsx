import "./SearchRes.css";
import { useState } from "react";
import { useNoteContext } from "../noteContext/NoteContext";

const SearchRes = (props) => {
    // description text slicing
    const shortDescription = props.myDescription;
    const shortDescriptionText = shortDescription.substring(0, 100) + "...";

    // to share data to description tab
    const { setNote } = useNoteContext();
    const { id, myLogo, myTitle, myDescription, mylink } = props;
    const handleComponentClick = () => {
        setNote(
            id,
            myTitle,
            myLogo,
            myDescription.substring(0, 520) + "...",
            mylink
        );
    };

    // to set the bookmark to active state
    const [activeMark, setActiveMark] = useState(
        "https://img.icons8.com/fluency-systems-regular/48/bookmark-ribbon--v1.png"
    );

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
            <div
                className="container-fluid search-result"
                onClick={handleComponentClick}
            >
                <div className="row rows">
                    <div className="col-1 img-class">
                        <img
                            width="40"
                            height="40"
                            src={props.myLogo}
                            alt="logo"
                        />
                    </div>
                    <div className="col-9 ms-3">
                        <p className="title">{props.myTitle}</p>
                        <p className="description">{shortDescriptionText}</p>
                    </div>
                    <div className="col-1 bookmark">
                        <img
                            width="32"
                            height="32"
                            src={`${activeMark}`}
                            alt="bookmark-ribbon--v1"
                            className="bookmark-ribbon"
                            onClick={handleBookmark}
                        />
                    </div>
                </div>
                <div className="row rows">
                    <div className="col d-flex">
                        {/* {mySkills.map((skill) => (
                        ))} */}
                        <p className="me-2 skills">UI/UX</p>
                        <p className="me-2 skills">Python</p>
                        <p className="me-2 skills">Javascript</p>
                    </div>
                </div>
                <div className="row rows last-row">
                    <div className="col d-flex">
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
                        <p className="proposals">
                            Proposals: 10 to <span>15</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchRes;
