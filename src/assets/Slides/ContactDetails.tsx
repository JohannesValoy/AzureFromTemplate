/** @format */

import "../../index.css";

const JohannesKolvikValoyPage = () => {
  return (
    <div className="page-container university-page-container" style={{}}>
      <div className="my-skills-page"><div className="contacts-image-container">
        <img
          src="./src/assets/Media/Johannes_kvadrat.jpg"
          alt="NTNU"
          className="university-image"
        ></img>
      </div>
        <div
          className="rounded-textbox-dark my-skills-text"
          style={{ width: "fit-content" }}
        >
          <h2>Telefon</h2>
          <ul style={{ listStyle: "none" }}>
            <li>(+47) 96013969</li>
          </ul>

          <h2>Epost</h2>
          <ul style={{ listStyle: "none" }}>
            <li>Johajo2559@gmail.com</li>
          </ul>

          <h2>LinkedIn</h2>
          <ul style={{ listStyle: "none" }}>
            <li>https://www.linkedin.com/in/johannes-valoy/</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JohannesKolvikValoyPage;