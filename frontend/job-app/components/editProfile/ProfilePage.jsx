// import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
    return (
        <>
            <div className="container main">
                <div className="row">
                    <div className="col">
                        <img
                            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1705997266~exp=1705997866~hmac=a541759ed8aae145ea685261edfc22887699fd99ac91c54069f90843a7f7919f"
                            alt="User-Image"
                            className="user-image"
                        />
                    </div>
                    <div className="col">
                        <h1>Account Settings</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 side-box">
                        <div className="row">
                            <div className="col">
                                <p>Dashboard</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Account Details</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Change Password</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Log Out</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <label>
                                    <h5>Email Address</h5>
                                </label>
                                <br />
                                <input type="text" className="input-box" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label>
                                    <h5>First Name</h5>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name=""
                                    className="input-box"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <label>
                                <h5>Last Name</h5>
                            </label>
                            <br />
                            <div className="col">
                                <input
                                    type="text"
                                    name=""
                                    className="input-box"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <label>
                                <h5>Profession</h5>
                            </label>
                            <br />
                            <div className="col">
                                <input
                                    type="text"
                                    name=""
                                    className="input-box"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <label>
                                <h5>Website</h5>
                            </label>
                            <br />
                            <div className="col">
                                <input
                                    type="text"
                                    name=""
                                    className="input-box"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <label>
                                <h5>Facebook</h5>
                            </label>
                            <br />
                            <div className="col">
                                <input
                                    type="text"
                                    name=""
                                    className="input-box"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <label>
                                <h5>Twitter</h5>
                            </label>
                            <br />
                            <div className="col">
                                <input
                                    type="text"
                                    name=""
                                    className="input-box"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
