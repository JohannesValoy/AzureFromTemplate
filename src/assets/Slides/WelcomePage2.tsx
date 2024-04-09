/** @format */

import "../../App";

const Page = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
      className="page-container"
    >
      <div className="custom-filter"></div>

      <h1 className="cv-section, welcome-page-text" style={{ zIndex: 1 }}>
        Personal Portfolio
        <p>Johannes Kolvik Valøy</p>
      </h1>
    </div>
  );
};

export default Page;
