/** @format */

import { useState } from "react";
import "../../index.css";

const JohannesKolvikValoyPage = () => {
  const [focus, setFocus] = useState({ iframe: 1, textbox: 2 });

  return (
    <div
      className="page-container kongsberg-page-container"
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div className="kongsberg-page" style={{height:"fit-content"}}>
        <div className="image-container-kongsberg" style={{ width: "50%" }}>
          <img
            src="./src/assets/Media/BlastThroughHistory.png"
            alt="NTNU"
            style={{ width: "100%", height: "auto", border: "none" }}
            className="cyberpunk-gaming-gear-image"
          ></img>
        </div>

        <div
          className="university-text-kongsberg"
          style={{ zIndex: focus.textbox }}
          onMouseEnter={() => setFocus({ iframe: 0, textbox: 2 })}
        >
          <h3>A Blast Through History</h3>
          <p>
            Gruppearbeid med å lage et 3D-tower defense spill i Unity og C#.
            <br></br>
            Selv laget jeg i hovedsak fienedenes intelligente målsøking og angrep.
            <br></br>
            Fiendene velger mål basert distanse fra mål og kjernen i spillet, målets helse og om det er i synsfeltet.
            <br></br>
            Fiendene danner grupper for å bli sterkere og angripe sammen. Dessuten sparer det minne og prosessorkraft.
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JohannesKolvikValoyPage;