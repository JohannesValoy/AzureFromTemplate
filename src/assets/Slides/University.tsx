/** @format */

import "../../index.css";

const Page = () => {
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
      <div className="image-container">
        <img
          src="./src/assets/Media/NTNU-Logo.jpg"
          alt="NTNU"
          className="ntnu-logo university-image"
        ></img>
      </div>

      <div className="university-text">
        <h3>Bachelor in Engineering, Data - </h3>
        <h3> NTNU Ålesund</h3>
        <ul style={{ listStyle: "none" }}>
          <li>august 2021- juni 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
