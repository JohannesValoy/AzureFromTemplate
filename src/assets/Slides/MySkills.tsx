/** @format */

import "../../index.css";

const JohannesKolvikValoyPage = () => {
  return (
    <div className="page-container university-page-container" style={{}}>
      <div className="my-skills-page">
        <div className="multi-image-container">
          <img
            src="./src/assets/Media/c--4.svg"
            alt="NTNU"
            className="skill-logos-image"
          ></img>
          <img
            src="./src/assets/Media/html-1.svg"
            alt="NTNU"
            className="skill-logos-image"
          ></img>
          <img
            src="./src/assets/Media/java.svg"
            alt="NTNU"
            className="skill-logos-image"
          ></img>
          <img
            src="./src/assets/Media/react-2.svg"
            alt="NTNU"
            className="skill-logos-image"
          ></img>
        </div>

        <div
          className="rounded-textbox-dark my-skills-text"
          style={{ width: "fit-content" }}
        >
          <h2>My Skills</h2>
          <ul style={{ listStyle: "none" }}>
            <li>Java + C#</li>
            <li>React + Javascript/HTML/CSS</li>
          </ul>

          <h2>Begrenset kjennskap til:</h2>
          <ul style={{ listStyle: "none" }}>
            <li>Python</li>
            <li>Postgres</li>
            <li>Typescript</li>
          </ul>

          <h2>Personlige egenskaper</h2>
          <ul style={{ listStyle: "none" }}>
            <li>Teamarbeider!</li>
            <li>Positiv</li>
            <li>Initiativrik</li>
          </ul>
          <h2>Hele presentasjonen er laget i React</h2>
        </div>
      </div>
    </div>
  );
};

export default JohannesKolvikValoyPage;
