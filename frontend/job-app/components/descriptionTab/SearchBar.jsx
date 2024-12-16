// import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import { useNoteContext } from "../noteContext/SearchBarContext";

const SearchBar = () => {
    // setNote to share the data
    const { setNote } = useNoteContext();

    // Declare a state variable to hold the input value
    const [inputValue, setInputValue] = useState(""); // check this bug

    // Event handler to update the state when the input changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        // setNote(event.target.value);
    };
    const handleKeyPress = (event) => {
        if (event.key == "Enter") {
            console.log(event.target.value);
            // setInputValue(event.target.value);
            setNote(event.target.value);
        }
    };
    return (
        <>
            <input
                type="text"
                placeholder="Search for Jobs..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="search-box"
            />
        </>
    );
};

export default SearchBar;
