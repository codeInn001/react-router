import React from "react";

const PageNotFound = () => {
  return (
    <div
      id="wrapper"
      style={{
        maxWidth: "600px",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="https://downloadscdn5.freepik.com/download_vector/jpg/1/1150/16/16304/16304926_Na_June_69.jpg?token=exp=1667259046~hmac=f2bf4fa7516e91be8be541bcb4d00ea6"
        alt="page not found"
        style={{ height: "300px", width: "300px", objectFit: "cover" }}
      />
      <div id="info" style={{ marginTop: "20px" }}>
        <h2>Error 404</h2>
        <h3>This page could not be found</h3>
      </div>
    </div>
  );
};

export default PageNotFound;
