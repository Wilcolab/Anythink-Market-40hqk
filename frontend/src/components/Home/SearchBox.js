import React, { useRef, useState } from "react";
import agent from "../../agent";

const Noresults = ({ emptyResults }) => {
  console.log("TESTING:", emptyResults)
  if (emptyResults) {
    return (
      <div id="empty">
        No results :(
      </div>
    )
  }

  return null
}

const SearchBox = () => {
  const inputRef = useRef(null);
  const [ emptyResults, setEmptyResults ] = useState(false)

  const handleChange = async (e) => {
    const textInput = inputRef.current.value;
    setEmptyResults(false)

    if (textInput.length >= 3) {
      console.log("searching...");
      const results = await agent.Items.search(textInput);
      
      console.log(results);

      if (results.itemsCount === 0) {
        console.log("NO RESULTS")
        setEmptyResults(true)
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED");
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="search-box"
        type="text"
        placeholder="What is it that you truly desire?"
        onChange={handleChange}
        ref={inputRef}
      />
      <Noresults emptyResults={emptyResults} />
    </form>
  );
};

export default SearchBox;
