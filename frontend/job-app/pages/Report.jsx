// import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNoteContext } from "../components/noteContext/AuthContext";

const Report = () => {
    const { isLoggedIn } = useNoteContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            // Navigate to login page
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            {isLoggedIn ? (
                <>
                    <p>Report Page</p>
                </>
            ) : (
                <>
                    <p>Please login !</p>
                </>
            )}
        </>
    );
};

export default Report;
