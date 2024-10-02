import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../images/navd.jpg";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useState(false);

  // Scroll to the section and return a Promise that resolves after the scroll is completed
  // const scrollToSection = (id) => {
  //   return new Promise((resolve) => {
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //       // Wait for a short time to ensure the scroll is complete
  //       setTimeout(resolve, 500); // Adjust timing if necessary
  //     } else {
  //       resolve(); // Resolve immediately if the element is not found
  //     }
  //   });
  // };

  // const handleClick = (index, id) => {
  //   // console.log(index + ":" + id);
  //   setActiveIndex(index);
  //   scrollToSection(id).then(() => {
  //     setTimeout(() => setOpen(false), 500); // Close the menu after scrolling
  //   });
  // };

  const forceUpdate = () => setActiveIndex(null);
  
  const handleClick = (index, id) => {
    // If the gallery is clicked, force update
    if (index === 3) { // Assuming index 3 corresponds to Gallery
      forceUpdate();
    }
    setActiveIndex(index);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Close the menu immediately
  };
  


  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div
      className="flex items-center justify-between px-8 pt-5 pb-2 fixed w-full z-50"
      style={{
        background:
          "linear-gradient(90deg, rgba(253, 190, 87, 1) 0%, rgba(252, 187, 88, 1) 10%, rgba(244, 119, 40, 1) 40%, rgba(244, 119, 40, 1) 100%)",
        borderBottomLeftRadius: open ? "0px" : "30px",
        borderBottomRightRadius: open ? "0px" : "30px",
        zIndex: "1000",
      }}
    >
      <div className="nav-pattern"></div>
      <div className="logo h-12 w-12 rounded-full">
        <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <nav>
          <ul className="flex gap-10 font-bold">
            <li
              className={`nav-item text-white cursor-pointer ${
                activeIndex === 0 ? "text-blue-900" : ""
              }`}
              onClick={() => handleClick(0, "history")}
            >
              ಇತಿಹಾಸ
            </li>
            <li
              className={`nav-item text-white cursor-pointer ${
                activeIndex === 1 ? "text-blue-900" : ""
              }`}
              onClick={() => handleClick(1, "events")}
            >
              ಕಾರ್ಯಕ್ರಮಗಳು
            </li>
            <li
              className={`nav-item text-white cursor-pointer ${
                activeIndex === 2 ? "text-blue-900" : ""
              }`}
              onClick={() => handleClick(2, "management")}
            >
              ಆಡಳಿತ ಮಂಡಲಿ
            </li>
            <li
              className={`nav-item text-white cursor-pointer ${
                activeIndex === 3 ? "text-blue-900" : ""
              }`}
              onClick={() => handleClick(3, "gallery")}
            >
              ಗ್ಯಾಲರಿ
            </li>
            <li
              className={`nav-item text-white cursor-pointer ${
                activeIndex === 4 ? "text-blue-900" : ""
              }`}
              onClick={() => handleClick(4, "contact")}
            >
              ಸಂಪರ್ಕಿಸಿ
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50">
        {open ? (
          <CloseIcon onClick={toggleMenu} className="cursor-pointer text-3xl" />
        ) : (
          <MenuIcon onClick={toggleMenu} className="cursor-pointer text-3xl" />
        )}
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 right-0 transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          width: "100vw",
          top: "69px",
          background:
            "linear-gradient(90deg, rgba(253, 190, 87, 1) 0%, rgba(252, 187, 88, 1) 10%, rgba(244, 119, 40, 1) 40%, rgba(244, 119, 40, 1) 100%)",
        }}
      >
        <ul className="flex flex-col gap-10 p-8 font-bold h-full">
          <li
            className={`nav-item text-white cursor-pointer ${
              activeIndex === 0 ? "text-blue-900" : ""
            }`}
            onClick={() => handleClick(0, "history")}
          >
            ಇತಿಹಾಸ
          </li>
          <li
            className={`nav-item text-white cursor-pointer ${
              activeIndex === 1 ? "text-blue-900" : ""
            }`}
            onClick={() => handleClick(1, "events")}
          >
            ಕಾರ್ಯಕ್ರಮಗಳು
          </li>
          <li
            className={`nav-item text-white cursor-pointer ${
              activeIndex === 2 ? "text-blue-900" : ""
            }`}
            onClick={() => handleClick(2, "management")}
          >
            ಆಡಳಿತ ಮಂಡಲಿ
          </li>
          <li
            className={`nav-item text-white cursor-pointer ${
              activeIndex === 3 ? "text-blue-900" : ""
            }`}
            onClick={() => handleClick(3, "gallery")}
          >
            ಗ್ಯಾಲರಿ
          </li>
          <li
            className={`nav-item text-white cursor-pointer ${
              activeIndex === 4 ? "text-blue-900" : ""
            }`}
            onClick={() => handleClick(4, "contact")}
          >
            ಸಂಪರ್ಕಿಸಿ
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
