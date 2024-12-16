// import React from "react";
import "./Profile.css";

const Profile = () => {
    return (
        <>
            <div className="container-fluid profilebox">
                <div className="row">
                    <div className="col">
                        <img
                            width="80"
                            height="80"
                            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                            alt="user-male-circle"
                            className="profile-image"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className="person">Jessica Sullivan</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="job">Product Designer</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button>Edit Profile</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
