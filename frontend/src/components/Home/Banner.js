import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import SearchBox from "./SearchBox";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  const revealSearch = () => {
    setShowSearch(true);
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">
            A place to <span onClick={revealSearch}>get</span>
          </span>
          {showSearch && <SearchBox />}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
