import React from "react";
import bottomBorder from "../assets/title-img-orange.svg";
import mainOwner from "../images/TempleMain.JPG";

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
        <p className="font-semibold">{name}</p>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  );
};

const ManagementPage = ({ id }) => {
  const teamMembers = [
    {
      name: "Sharad Kamath",
      role: "Founder",
      description: "Temple Tech Innovator",
      image: mainOwner
    },
    {
      name: "S Prakash",
      role: "Co-Founder",
      description: "Co-Founder of 3iology, specializing in Corporate Affairs and Managed Services & Operations with more than 20 years of experience.",
      image: mainOwner
    },
    {
      name: "Parag Bhuptani",
      role: "Co-Founder",
      description: "Experienced co-founder with expertise in technology and innovation.",
      image: mainOwner
    },
    {
      name: "Dr. Sarika Mahajan",
      role: "Advisor",
      description: "Expert advisor providing valuable insights to the team.",
      image: mainOwner
    }
  ];

  return (
    <div id={id} className="bg-[#fff7e7] w-full min-h-[100vh] border-2 pt-20">
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
