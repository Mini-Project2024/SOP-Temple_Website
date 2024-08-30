import React from "react";

// Import images
import devi from "../images/devi1.png";
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
        className="absolute chakra top-[40%] left-[20%] h-28 w-28 opacity-30 animate-spin-slow
            xs:left-[10%] xs:h-20 xs:w-20 xs:top-[45%]
        "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute chakra top-[20%] right-[20%] h-28 w-28 opacity-30 animate-spin-slow
            xs:right-[10%] xs:h-20 xs:w-20 xs:top-[30%]
        "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute chakra top-0 left-[-50px] h-36 w-36 opacity-40 animate-spin-slow
            xs:h-32 xs:w-32
        "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute chakra top-0 right-[-50px] h-36 w-36 opacity-40 animate-spin-slow
            xs:h-32 xs:w-32
        "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Base */}
      <div
        className="absolute base bottom-0 w-full h-24"
        style={{
          backgroundSize: "contain",
        }}
      ></div>

      {/* Aasan */}
      <div
        className="absolute aasan left-[53%] bottom-[95px] w-[700px] h-[240px] transform -translate-x-1/2
            xs:h-[200px] xs:w-[400px] xs:bottom-[62px] xs:left-1/2
        "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Middle Chakra */}
      <div
        className="absolute chakra animate-spin-slow bottom-[260px] left-[43%] h-48 w-48
            xs:h-36 xs:w-36 xs:bottom-[200px] xs:left-[32%] md:left-[43%]
        "
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Devi Pic */}
      <div
        className="absolute bottom-0 left-[36.2%] h-[400px] w-[400px] z-10
          xs:h-[250px] xs:w-[250px] xs:bottom-8 xs:left-[20%] md:left-[37.5%]
        "
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
