import React from "react";
import "./TopBarMobile.css";

// Top bar for mobile view with search bar and filter and sort buttons
function TopBarMobile() {
  return (
    <div id="top-bar-mobile">
      <div id="search-bar-mobile">
        <img src="../src/assets/search-icon-grey.svg" />
        <input type="text" placeholder="Search for a building..." />
      </div>

      <div id="bottom-half-mobile">
        <button>
          <img src="../src/assets/filter-alt-icon.svg" />
          <p>Filters</p>
        </button>

        <button>
          <img src="../src/assets/filter-list-icon.svg" />
          <p>Sort</p>
        </button>
      </div>
    </div>
  );
}

export default TopBarMobile;
