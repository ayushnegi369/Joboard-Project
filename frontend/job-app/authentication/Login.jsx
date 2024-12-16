import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useNoteContext } from "../components/noteContext/AuthContext";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // check the authentication state
    const [authenticated, setAuthenticated] = useState();

    const navigate = useNavigate();

    const { setNote } = useNoteContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/login", { email, password })
            .then((result) => {
                console.log(result);
                if (result.data == "Success") {
                    console.log("Successfully logged in");
                    setAuthenticated(true);
                    setNote((prevAuthenticated) => {
                        // Use the updated state value here
                        console.log("Login : ", !prevAuthenticated);
                        return !prevAuthenticated;
                    });
                    navigate("/");
                    console.log("Login : ", authenticated);
                }
            })
            .catch((err) => console.log(err));
        console.log("success");
    };

    return (
        <>
            <div className="container form">
                <div className="row">
                    <div className="col">
                        <p className="top">Login</p>
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
                            className="password"
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col forgot">
                        <a href="#" className="forgotlink">
                            Forgot password?
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col login">
                        <button
                            className="login-btn"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col signup">
                        <p className="p-sign">
                            Don't have an account?
                            <Link to="/signup" className="sign">
                                {" "}
                                Signup
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

export default Login;
