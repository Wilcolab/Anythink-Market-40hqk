import React, { useRef } from "react";
import agent from "../../agent";

const SearchBox = () => {
    const inputRef = useRef(null);

    const handleChange = async (e) => {
        const textInput = inputRef.current.value;
        if (textInput.length >= 3) {
            console.log("searching...");
            const results = await agent.Items.search(textInput);
            console.log(results);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMITTED");
        console.log(inputRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input id="search-box" type="text" placeholder="What is it that you truly desire?" onChange={handleChange} ref={inputRef} />
        </form>
    )
};

export default SearchBox;