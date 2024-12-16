import "./Signup.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (confirmPassword === password) {
            axios
                .post("http://localhost:3001/register", { email, password })
                .then((result) => console.log(result))
                .catch((err) => console.log(err));
            navigate("/login");
        } else {
            console.log("Check your password");
        }
    };
    return (
        <>
            <div className="container form">
                <div className="row">
                    <div className="col">
                        <p className="top">Signup</p>
                    </div>
                </div>
                <div className="row emailbox">
                    <div className="col">
                        <input
                            type="text"
                            className="email"
                            placeholder="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="row passbox">
                    <div className="col">
                        <input
                            type="password"
                            className="passwords"
                            placeholder="Create Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col forgot">
                        <input
                            type="password"
                            className="confirm-password"
                            placeholder="Confirm Password"
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col login">
                        <button className="login-btn" onClick={handleSubmit}>
                            Signup
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col signup">
                        <p className="p-sign">
                            Already have an account?
                            <Link to="/login" className="sign">
                                {" "}
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <hr />
                    </div>
                    <div className="col-2 or">
                        <p>Or</p>
                    </div>
                    <div className="col-5">
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="google-btn">
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
