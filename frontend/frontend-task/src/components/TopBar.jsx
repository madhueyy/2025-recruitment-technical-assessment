import React from "react";
import "./TopBar.css";

// Top bar with filters button, search bar and sort button
function TopBar() {
  return (
    <div id="top-bar">
      <button>
        <img src="../src/assets/filter-alt-icon.svg" />
        <p>Filters</p>
      </button>

      <div id="search-bar">
        <img src="../src/assets/search-icon-grey.svg" />
        <input type="text" placeholder="Search for a building..." />
      </div>

      <button>
        <img src="../src/assets/filter-list-icon.svg" />
        <p>Sort</p>
      </button>
    </div>
  );
}

export default TopBar;
