import React from "react";

// Import images
import chakra from "../images/chakra.svg";
import devi from "../images/devi1.png";
import base from "../images/base.svg";
import aasan from "../images/aasan.svg";
import toranLeft from "../images/Toran-left.svg";
import toranRight from "../images/Toran-right.svg";

const LandingPage = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#fcf0d8] relative">
      {/* Left Toran */}
      <div
        className="absolute top-[75px] left-0 h-[450px] w-[50vw] bg-no-repeat bg-left bg-contain md:h-[350px] sm:h-[250px] xs:h-[250px]"
        style={{
          backgroundImage: `url(${toranLeft})`,
        }}
      ></div>

      {/* Right Toran */}
      <div
        className="absolute top-[75px] right-0 h-[450px] w-[50vw] bg-no-repeat bg-right bg-contain md:h-[350px] sm:h-[250px] xs:h-[250px]"
        style={{
          backgroundImage: `url(${toranRight})`,
        }}
      ></div>

      {/* Chakra */}
      <div
        className="absolute top-[40%] left-[20%] h-28 w-28 opacity-30 animate-spin-slow"
        style={{
          backgroundImage: `url(${chakra})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute top-[20%] right-[20%] h-28 w-28 opacity-30 animate-spin-slow"
        style={{
          backgroundImage: `url(${chakra})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute top-0 left-[-50px] h-36 w-36 opacity-40 animate-spin-slow"
        style={{
          backgroundImage: `url(${chakra})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute top-0 right-[-50px] h-36 w-36 opacity-40 animate-spin-slow"
        style={{
          backgroundImage: `url(${chakra})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Base */}
      <div
        className="absolute bottom-0 w-full h-24"
        style={{
          backgroundImage: `url(${base})`,
          backgroundSize: "contain",
        }}
      ></div>

      {/* Aasan */}
      <div
        className="absolute left-[53%] bottom-[95px] w-[700px] h-[240px] transform -translate-x-1/2"
        style={{
          backgroundImage: `url(${aasan})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Middle Chakra */}
      <div
        className="absolute animate-spin-slow bottom-[260px] left-[43%] h-48 w-48"
        style={{
          backgroundImage: `url(${chakra})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Devi Pic */}
      <div
        className="absolute bottom-0 left-[36.2%] h-[400px] w-[400px] z-10"
        style={{
          backgroundImage: `url(${devi})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default LandingPage;
