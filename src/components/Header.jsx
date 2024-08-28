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
    <div className="flex items-center justify-between px-8 py-4 bg-yellow-300 relative z-50">
      <h3 className="text-xl md:text-xl font-bold">
        ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಸ್ಥಾನ
      </h3>

      <div className="hidden md:block">
        <nav>
          <ul className="flex gap-10 font-bold">
            <li
              className={`nav-item cursor-pointer ${
                activeIndex === 0 ? "text-blue-500" : ""
              }`}
              onClick={() => handleClick(0, "history")}
            >
              ಇತಿಹಾಸ
            </li>
            <li
              className={`nav-item cursor-pointer ${
                activeIndex === 2 ? "text-blue-500" : ""
              }`}
              onClick={() => handleClick(2, "gallery")}
            >
              ಗ್ಯಾಲರಿ
            </li>
            <li
              className={`nav-item cursor-pointer ${
                activeIndex === 3 ? "text-blue-500" : ""
              }`}
              onClick={() => handleClick(3, "contact")}
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
        style={{ width: "100vw", backgroundColor: "rgba(255, 222, 77, 1)" }}
      >
        <ul className="flex flex-col gap-10 p-8 font-bold h-full">
          <li
            className={`nav-item cursor-pointer ${
              activeIndex === 0 ? "text-blue-500" : ""
            }`}
            onClick={() => handleClick(0, "history")}
          >
            ಇತಿಹಾಸ
          </li>
          <li
            className={`nav-item cursor-pointer ${
              activeIndex === 2 ? "text-blue-500" : ""
            }`}
            onClick={() => handleClick(2, "gallery")}
          >
            ಗ್ಯಾಲರಿ
          </li>
          <li
            className={`nav-item cursor-pointer ${
              activeIndex === 3 ? "text-blue-500" : ""
            }`}
            onClick={() => handleClick(3, "contact")}
          >
            ಸಂಪರ್ಕಿಸಿ
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
