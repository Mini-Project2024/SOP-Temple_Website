import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (index, id) => {
    setActiveIndex(index);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setOpen(false); // Close menu after clicking
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  
  return (
    <div
      className="flex items-center justify-between px-8 py-6 fixed w-full z-50"
      style={{
        background: "linear-gradient(90deg, rgba(253, 190, 87, 1) 0%, rgba(252, 187, 88, 1) 10%, rgba(244, 119, 40, 1) 40%, rgba(244, 119, 40, 1) 100%)",
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
      }}
    >
      <div className="nav-pattern"></div>
      <h3 className="text-xl md:text-xl  font-bold text-white">
        ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಸ್ಥಾನ
      </h3>

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
                activeIndex === 2 ? "text-blue-900" : ""
              }`}
              onClick={() => handleClick(1, "events")}
            >
            ಕಾರ್ಯಕ್ರಮಗಳು            
            </li>
            <li
              className={`nav-item text-white cursor-pointer ${
                activeIndex === 3 ? "text-blue-900" : ""
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
            top: "55px",
            background: "linear-gradient(90deg, rgba(253, 190, 87, 1) 0%, rgba(252, 187, 88, 1) 10%, rgba(244, 119, 40, 1) 40%, rgba(244, 119, 40, 1) 100%)",
         }}
      >
        <ul className="flex flex-col gap-10 p-8 font-bold h-full">
          <li
            className={`nav-item cursor-pointer text-white ${
              activeIndex === 0 ? "text-blue-900" : ""
            }`}
            onClick={() => handleClick(0, "history")}
          >
            ಇತಿಹಾಸ
          </li>
          <li
            className={`nav-item cursor-pointer text-white ${
              activeIndex === 1 ? "text-blue-900" : ""
            }`}
            onClick={() => handleClick(2, "gallery")}
          >
            ಗ್ಯಾಲರಿ
          </li>
          <li
            className={`nav-item cursor-pointer text-white ${
              activeIndex === 2 ? "text-blue-900" : ""
            }`}
            onClick={() => handleClick(3, "events")}
          >
            ಕಾರ್ಯಕ್ರಮಗಳು 
          </li>
          <li
            className={`nav-item cursor-pointer text-white ${
              activeIndex === 3 ? "text-blue-900" : ""
            }`}
            onClick={() => handleClick(3, "management")}
          >
            ಆಡಳಿತ ಮಂಡಲಿ 
          </li>
          <li
            className={`nav-item cursor-pointer text-white ${
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
