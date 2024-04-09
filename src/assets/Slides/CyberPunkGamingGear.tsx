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
      <img
            src="./src/assets/Media/CyberPunkGamingGear.webp"
            alt="NTNU"
            className="cyberpunk-gaming-gear-image"
          ></img>

        <div
          className="university-text-kongsberg"
          style={{ zIndex: focus.textbox }}
          onMouseEnter={() => setFocus({ iframe: 0, textbox: 2 })}
        >
          <h3>Prosjekt i Webteknologi og Apputvikling</h3>
          <p>
            Laget en nettside for å selle spillutstyr, for å lære om frontend og
            backend utvikling.
            <br></br>
            Brukte JS/HTML/CSS, Java + (Backend-utvikleren i gruppen vår brukte JDBC og Postgres).
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JohannesKolvikValoyPage;