import React from "react";
import bottomBorder from "../assets/title-img-orange.svg";
import mainOwner from "../images/dejappa.jpg";
import sanjeevaPoojary from "../images/sanjeevaPoojary.jpg";
import sarapadiAshokShetty from "../images/sarapadiAshokShetty.jpg";
import dayanandaShetty from "../images/dayanandShetty.jpg"
import girinath from "../images/girinath.jpg"
import tantri from '../images/tantrii.jpg'
import templeSwami from "../images/TempleOG.jpg"
import sundar from "../images/sundar.jpg"

const TeamMember = ({ name, role, description, image }) => {
  return (
    <div className="w-64 m-4 flex flex-col items-center">
      <div className="relative w-full h-80">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div
        className="relative mt-2 text-center"
        style={{
          width: "100%",
          paddingBottom: "0.5rem",
        }}
      >
        <div className="border-t-2 border-orange-500 pt-2">
          <div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            style={{
              borderWidth: "8px",
              borderColor: "transparent transparent #ef5521 transparent",
              borderStyle: "solid",
              borderTopWidth: "0",
              borderBottomWidth: "0",
              width: "0",
              height: "0",
              content: "",
            }}
          />
        </div>
        <p className="font-semibold text-[#ef5521ff]">{name}</p>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  );
};

const ManagementPage = ({ id }) => {
  const teamMembers = [
    {
      name: "ದೇಜಪ್ಪ ಬಾಚಕೆರೆ",
      role: "ಸ್ಥಾಪಕಾಧ್ಯಕ್ಷರು / ಧರ್ಮದರ್ಶಿಗಳು",
      image: mainOwner
    },
    {
      name: "ಶ್ರೀ ಶ್ರೀ ಮೋಹನದಾಸ ಪರಮಹಂಸ ಸ್ವಾಮೀಜಿ",
      role: "ಶ್ರೀ ಧಾಮ ಮಣಿಲ ಸ್ವಾಮೀಜಿ",
      image: templeSwami
    },
    {
      name: " ಶ್ರೀ ಶಿವಪ್ರಸಾದ ಐತಾಳರು",
      role: "ಕ್ಷೇತ್ರದ ಪ್ರಧಾನ ತಂತ್ರಿಗಳು",
      image: tantri
    },
    {
      name: "ಸಂಜೀವ ಪೂಜಾರಿ",
      role: "ಅಧ್ಯಕ್ಷರು",
      image: sanjeevaPoojary
    },
    {
      name: "ದಯಾನಂದ ಶೆಟ್ಟಿ",
      role: "ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ",
      image: dayanandaShetty
    },
    {
      name: "ಸರಪಾಡಿ ಅಶೋಕ್ ಶೆಟ್ಟಿ",
      role: "ಕಾರ್ಯದರ್ಶಿ",
      image: sarapadiAshokShetty
    },
   
    {
      name: "ಸುಂದರ್ ಬಾಚಕೆರೆ",
      role: "ಕೋಶಾಧಿಕಾರಿ",
      image: sundar
    },
    {
      name: "ಗಿರಿನಾಥ ಬಾಚಕೆರೆ",
      role: "ಪ್ರಧಾನ ಅರ್ಚಕರು",
      image: girinath
    }
  ];

  return (
    <div id={id} className="bg-[#fff7e7] w-full min-h-[100vh] pt-20">
      <h2 className="font-bold md:text-3xl xs:text-xl flex justify-center text-[#ef5521ff]">
        ದೇವಾಲಯದ ಆಡಳಿತ ಮಂಡಲಿ
      </h2>
      <div className="flex justify-center mt-4">
        <img src={bottomBorder} alt="Bottom Border" className="md:w-1/4" />
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default ManagementPage;
