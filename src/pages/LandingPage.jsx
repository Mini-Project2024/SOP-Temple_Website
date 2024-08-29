import React from "react";

const LandingPage = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#fcf0d8] relative">
      {/* Left Toran */}
      <div
        className="absolute top-[75px] left-0 h-[450px] w-[50vw] bg-no-repeat bg-left bg-contain"
        style={{ backgroundImage: "url('/src/assets/Toran-left.svg')" }}
      ></div>

      {/* Right Toran */}
      <div
        className="absolute top-[75px] right-0 h-[450px] w-[50vw] bg-no-repeat bg-right bg-contain"
        style={{ backgroundImage: "url('/src/assets/Toran-right.svg')" }}
      ></div>

      {/* Chakra */}
      <div
        className="absolute top-[40%] left-[20%] h-28 w-28 opacity-30 animate-spin-slow"
        style={{
          backgroundImage: "url('/src/assets/chakra.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute top-[20%] right-[20%] h-28 w-28 opacity-30 animate-spin-slow"
        style={{
          backgroundImage: "url('/src/assets/chakra.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute top-0 left-[-50px] h-36 w-36 opacity-40 animate-spin-slow"
        style={{
          backgroundImage: "url('/src/assets/chakra.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute top-0 right-[-50px] h-36 w-36 opacity-40 animate-spin-slow"
        style={{
          backgroundImage: "url('/src/assets/chakra.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Base */}
      <div
        className="absolute bottom-0 w-full h-24"
        style={{
          backgroundImage: "url('/src/assets/base.svg')",
          backgroundSize: "contain",
        }}
      ></div>

      {/* Aasan */}
      <div
        className="absolute left-[53%] bottom-[95px] w-[700px] h-[240px] transform -translate-x-1/2"
        style={{
          backgroundImage: "url('/src/assets/aasan.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Middle Chakra */}
      <div
        className="absolute animate-spin-slow bottom-[250px] left-[670px] h-44 w-44"
        style={{
        //   margin: "0 auto",
          backgroundImage: "url('/src/assets/chakra.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Devi Pic */}
      <div
        className="absolute bottom-0 left-[36.5%] h-[400px] w-[400px] z-10"
        style={{
            backgroundImage: "url('/src/images/devi1.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
        }}
      >
      </div>
    </div>
  );
};

export default LandingPage;
