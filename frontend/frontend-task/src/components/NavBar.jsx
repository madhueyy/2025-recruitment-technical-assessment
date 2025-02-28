import { useState } from "react";
import "./Navbar.css";

// Navbar with freerooms logo, text and menu buttons
function NavBar() {
  // Close state for freerooms door logo
  const [isClosed, setIsClosed] = useState(false);

  const buttonIcons = [
    "../src/assets/search-icon.svg",
    "../src/assets/grid-view-icon.svg",
    "../src/assets/map-icon.svg",
    "../src/assets/dark-mode-icon.svg",
  ];

  return (
    <div id="navbar">
      {/* Closing and opening door logos */}
      {isClosed ? (
        <img
          src="../src/assets/freeroomsDoorClosed.png"
          id="logo-closed"
          onClick={() => setIsClosed(false)}
        />
      ) : (
        <img
          src="../src/assets/freeRoomsLogo.png"
          id="logo-open"
          onClick={() => setIsClosed(true)}
        />
      )}

      <h1 id="logo-text">Freerooms</h1>

      {/* Menu buttons with orange background for grid view button */}
      <div className="navbar-buttons">
        {buttonIcons.map((imgSrc, index) => (
          <button
            key={index}
            className={
              imgSrc.includes("grid-view")
                ? "selectedButton"
                : "nonSelectedButton"
            }
          >
            <img src={imgSrc} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
