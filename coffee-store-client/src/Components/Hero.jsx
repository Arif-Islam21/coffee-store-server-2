import React from "react";

const Hero = () => {
  return (
    <div
      className="hero  min-h-[80vh]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg)",
      }}
    >
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content hover:hero-overlay hover:bg-opacity-30 text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold font-rancho">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="mb-5 font-raleway">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577] btn-outline font-bold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
