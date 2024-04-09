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
      <div className="kongsberg-page">
        <div className="image-container-kongsberg"
        style={{width:"50%"}}>
          <iframe
            src="http://localhost:5174/"
            style={{ width: "100%", height: "100%", zIndex: focus.iframe, border: "none"}}
            title="Embedded Website"
            onMouseEnter={() => setFocus({ iframe: 2, textbox: 0 })}
          />
        </div>

        <div
          className="university-text-kongsberg"
          style={{ zIndex: focus.textbox }}
          onMouseEnter={() => setFocus({ iframe: 0, textbox: 2 })}
        >
          <h3>Industriprosjekt i Kongsberg</h3>
          <p>
            Laget en nettside for Kongsberg, for å hjelpe dem med å visualisere
            hvordan systemene i skipene deres henger sammen.
            <br></br>
            Brukte React med React og React flow for å lage nettsiden.
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JohannesKolvikValoyPage;