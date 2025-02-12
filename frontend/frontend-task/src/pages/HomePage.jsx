import React from "react";
import TopBar from "../components/TopBar";
import Building from "../components/Building";
import buildings from "../data.json";
import "./HomePage.css";
import TopBarMobile from "../components/TopBarMobile";

function HomePage() {
  return (
    <div>
      <div className="normal-top-bar">
        <TopBar />
      </div>
      <div className="mobile-top-bar">
        <TopBarMobile />
      </div>
      <div className="building-container">
        {buildings.map((building, index) => (
          <Building
            key={index}
            buildingName={building.name}
            imgSrc={building.building_file || building.building_picture}
            roomsNum={building.rooms_available}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
