/** @format */

import "../../index.css";

const JohannesKolvikValoyPage = () => {
  return (
    <div
      className="page-container university-page-container"
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src="./src/assets/Media/Hexagon.svg"
        alt="NTNU"
        className="twoday-hexagon"
      ></img>

      <img
        src="./src/assets/Media/Hexagon2.svg"
        alt="NTNU"
        className="twoday-hexagon2"
      ></img>

      <div className="image-container">
        <img
          src="./src/assets/Media/twoday.jpg"
          alt="NTNU"
          className="ntnu-logo university-image"
        ></img>
      </div>

      <div className="rounded-textbox university-text">
        <h3>TwodayInternship</h3>
        <p>
          Praksis i Twoday, en konsulentbedrift i Ålesund. Der utviklet
          jeg en liten del av en nettside for en kunde, og fikk en innføring i webutvikling.
          Jeg trivdes veldig godt med oppgavene og miljøet, og fikk en god
          forståelse for hvordan programvareutvikling foregår i praksis. Jeg brukte
          React med TypeScript, og litt zod, og chakra UI for å lage nettsiden.
        </p>
      </div>
    </div>
  );
};

export default JohannesKolvikValoyPage;