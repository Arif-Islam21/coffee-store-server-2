import React from "react";

const ErrorElement = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/404-error-background_23-2148071738.jpg?ga=GA1.1.1305675034.1693990964&semt=ais_hybrid)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <button className="btn btn-secondary btn-outline">Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
