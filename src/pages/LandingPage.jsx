import React from "react";

const LandingPage = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#fcf0d8] relative">
      {/* Left Toran */}
      <div
        className="absolute top-[75px] left-0 h-[450px] w-[50vw] bg-no-repeat bg-left bg-contain md:h-[350px] sm:h-[250px] xs:h-[250px]"
        style={{ backgroundImage: "url('src/images/Toran-left.svg')" }}
      ></div>

      {/* Right Toran */}
      <div
        className="absolute top-[75px] right-0 h-[450px] w-[50vw] bg-no-repeat bg-right bg-contain md:h-[350px] sm:h-[250px] xs:h-[250px]"
        style={{ backgroundImage: "url('src/images/Toran-right.svg')" }}
      ></div>

      {/* Chakra */}
      <div
        className="absolute top-[40%] left-[20%] h-28 w-28 opacity-30 animate-spin-slow 
                    md:top-[20%] xs:top-[45%] md:left-[15%] xs:left-[15%]
                    md:h-24 md:w-24 xs:h-20 xs:w-20
                   "
        style={{
          backgroundImage: "url('/src/images/chakra.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute top-[20%] right-[20%] h-28 w-28 opacity-30 animate-spin-slow
                    md:top-[20%] xs:top-[35%] md:right-[15%] xs:right-[10%]
                    md:h-24 md:w-24 xs:h-20 xs:w-20
                  "
        style={{
          backgroundImage: "url('src/images/chakra.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute top-0 left-[-50px] h-36 w-36 opacity-40 animate-spin-slow xs:h-32 xs:w-32"
        style={{
          backgroundImage: "url('src/images/chakra.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute top-0 right-[-50px] h-36 w-36 opacity-40 animate-spin-slow xs:h-32 xs:w-32"
        style={{
          backgroundImage: "url('src/images/chakra.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Base */}
      <div
        className="absolute bottom-0 w-full h-24"
        style={{
          backgroundImage: "url('src/images/base.svg')",
          backgroundSize: "contain",
        }}
      ></div>

      {/* Aasan */}
      <div
        className="absolute left-[53%] bottom-[95px] w-[700px] h-[240px] transform -translate-x-1/2
                    xs:w-[300px] xs:h-[120px] md:w-[500px] md:h-[200px]
                  "
        style={{
          backgroundImage: "url('src/images/aasan.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Middle Chakra */}
      <div
        className="absolute animate-spin-slow bottom-[260px] left-[43%] h-48 w-48
                    md:h-36 md:w-36 md:bottom-[230px] md:left-[45%]
                    xs:h-28 xs:w-28 xs:bottom-[170px] xs:left-[39.5%]
                  "
        style={{
          //   margin: "0 auto",
          backgroundImage: "url('src/images/chakra.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Devi Pic */}
      <div
        className="absolute bottom-0 left-[36.2%] h-[400px] w-[400px] z-10
                    md:h-[350px] md:w-[350px] md:left-[34.5%]
                    xs:h-[230px] xs:w-[230px] xs:bottom-[30px] xs:left-[26%]
                  "
        style={{
          backgroundImage: "url('src/images/devi1.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default LandingPage;
