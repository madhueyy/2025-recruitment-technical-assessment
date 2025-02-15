import React from "react";
import "./Building.css";

// Building card with building name, image and available room numbers
function Building({ buildingName, imgSrc, roomsNum }) {
  return (
    <div className="building">
      <img src={imgSrc} alt={buildingName} className="building-image"></img>

      {/* For desktop and tablet sizes */}
      <div className="rooms">
        <span className="circle"></span>
        <p className="large-rooms">{roomsNum} rooms available</p>
      </div>

      <div className="building-name">{buildingName}</div>

      {/* For mobile sizes */}
      <div className="mobile">
        <div className="building-name-mobile">{buildingName}</div>

        <div className="rooms-mobile">
          <span className="circle-mobile"></span>
          <p className="small-rooms">
            {roomsNum}/{roomsNum}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Building;
