import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../App.css";
import oldphoto from "../images/oldphoto1.jpg";
import moola from "../images/moolasanidhya.JPG";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing icons

const HistoryPage = ({ id }) => {
  const sectionsRef = useRef([]);
  const contentRef = useRef(); // Ref for the additional content
  const [showMore, setShowMore] = useState(false); // State to handle showing more content

  useEffect(() => {
    // Animation logic for initial section loading
    sectionsRef.current.forEach((section, index) => {
      const leftDiv = section.querySelector(".left-div");
      const rightDiv = section.querySelector(".right-div");

      gsap.fromTo(
        leftDiv,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.6,
        }
      );

      gsap.fromTo(
        rightDiv,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.6 + 0.3,
        }
      );
    });
  }, []);

  // Toggle between showing more or less content with slow motion effect
  const toggleShowMore = () => {
    if (showMore) {
      // Animate content hide with slow motion
      gsap.to(contentRef.current, {
        opacity: 0,
        height: 0,
        duration: 1, // Slow motion duration
        ease: "power2.inOut",
        onComplete: () => setShowMore(false),
      });
    } else {
      // Animate content reveal with slow motion
      setShowMore(true);
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, height: 0 },
        {
          opacity: 1,
          height: "auto",
          duration: 1, // Slow motion duration
          ease: "power2.inOut",
        }
      );
    }
  };

  return (
    <>
      <div id={id} className="w-full h-full flex p-10 px-50 py-50 bg-orange-100">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-4xl font-extrabold text-red-900 underline mt-10">
            ಇತಿಹಾಸ
          </h1>
          <br />
          <div className="flex justify-center align-center">
            <div>
              <img src={oldphoto} className="image1" alt="old photo" />
              <p className="text-center text-xl font-bold text-red-900 mt-3">
                ಪುರಾತನ ಕ್ಷೇತ್ರ
              </p>
            </div>
            <div>
              <img src={moola} className="image1" alt="" />
              <p className="text-center text-xl font-bold text-red-900 mt-3">
                ಬಾಚಕೆರೆ ಮೂಲ ಸಾನಿಧ್ಯ
              </p>
            </div>
          </div>

          <p
            className="p-10 leading-30 text-justify text-red-900 font-serif font-semibold"
            style={{ lineHeight: "1.6em" }}
          >
            ನಮ್ಮಿ ತುಳುನಾಡು ಸತ್ಯ, ನ್ಯಾಯ, ಧರ್ಮಕ್ಕೆ ಪ್ರಸಿದ್ಧಿ ಪಡೆದ ಪುಣ್ಯಭೂಮಿ.
            ಇಲ್ಲಿನ ಸಂಸ್ಕೃತಿ, ಆಚಾರ ವಿಚಾರಗಳು, ಆರಾಧನಾ ಪದ್ಧತಿಗಳು ಜಗತ್ತಿನೆಲ್ಲೆಡೆ
            ಪ್ರಖ್ಯಾತಿ ಪಡೆದಿರುವುದು ತುಳುನಾಡಿನ ಹೆಮ್ಮೆ, ಈ ನೆಲದ ಸಂಸ್ಕೃತಿಯನ್ನು
            ಉಳಿಸುವಲ್ಲಿ ಇಲ್ಲಿನ ಆರಾಧನಾಲಯಗಳ ಕೊಡುಗೆಯು ಅಪಾರವಾದುದು, ತುಳುನಾಡಿನ
            ಪುಣ್ಯಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಕಾಲಕಾಲಕ್ಕೆ ನಡೆಯುವ ಪೂಜೆ, ಉತ್ಸವಾದಿಗಳು ಮಾನವ ಕುಲದ
            ಬದುಕಿಗೆ ಶಾಂತಿ, ನೆಮ್ಮದಿಯನ್ನು ನೀಡುವುದರೊಂದಿಗೆ ಸಮಾಜ ಸತ್ಪಥದಲ್ಲಿ
            ಮುನ್ನಡೆಯಲು ಪ್ರೇರಣೆಯಾದುದು. ಅದೆಷ್ಟೋ ಹಳೆಯ ಆರಾಧನಾಲಯಗಳ ಜೀರ್ಣೋದ್ಧಾರ, ಹೊಸ
            ಕ್ಷೇತ್ರಗಳ ನಿರ್ಮಾಣ, ವೈಭವಯುತ ಉತ್ಸವಗಳು ಮತ್ತೆ ಮತ್ತೆ ನಡೆಯುತ್ತಾ ತುಳುನಾಡಿನ
            ಗತವೈಭವವನ್ನು ಸಾರುತ್ತಿರುವುದು ಮನುಕುಲಕ್ಕೆ ದೈವದೇವರುಗಳ ಮೇಲಿರುವ
            ಶ್ರದ್ಧಾಭಕ್ತಿಗೆ ಸಾಕ್ಷಿ. ದ.ಕ.ಜಿಲ್ಲೆಯ ಬಂಟ್ವಾಳ ತಾಲೂಕಿನ ಮಣಿನಾಲ್ಕೂರು
            ಗ್ರಾಮದ ಬಾಚಕೆರೆ ಎಂಬಲ್ಲಿರುವ ಪ್ರಕೃತಿ ರಮಣೀಯ ಹಚ್ಚಹಸಿರ ಸುಂದರ ಪರಿಸರದಲ್ಲಿರುವ
            ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರೀ ಸಾನಿಧ್ಯವು ಭಕ್ತರ ನಂಬುಗೆಯ, ಇಷ್ಟಾರ್ಥ ಸಿದ್ಧಿಸುವ
            ಪುಣ್ಯನೆಲೆಯಾಗಿ ಪ್ರಸಿದ್ಧಿ ಪಡೆದಿದೆ. ಸುಮಾರು ಮೂರು ತಲೆಮಾರುಗಳ ಇತಿಹಾಸವಿರುವ
            ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರೀ ಅಮ್ಮನವರ ಮೂಲಸಾನಿಧ್ಯವನ್ನು ಇದೀಗ ಶ್ರೀ
            ದುರ್ಗಾಪರಮೇಶ್ವರೀ ದೇವಸ್ಥಾನವನ್ನಾಗಿ ರೂಪಿಸುವುದು ಸಮಸ್ತ ಭಕ್ತಾದಿಗಳ
            ಸಂಕಲ್ಪವಾಗಿದೆ. ಈಗಾಗಲೇ ಹಲವಾರು ವರ್ಷಗಳಿಂದ ಈ ಸಾನಿಧ್ಯದಲ್ಲಿ ವಾರ್ಷಿಕ ಉತ್ಸವ,
            ನವರಾತ್ರಿ ಉತ್ಸವ, ಸಂಕ್ರಮಣ ವಿಶೇಷ ಪೂಜೆ, ಅನ್ನಸಂತರ್ಪಣೆ, ಅಯ್ಯಪ್ಪ ಸ್ವಾಮಿ
            ಪೂಜೆ ಮೊದಲಾದ ಧಾರ್ಮಿಕ, ವೈದಿಕ, ಸಾಂಸ್ಕೃತಿಕ ಕಾಠ್ಯಕ್ರಮಗಳನ್ನು ಅರ್ಥಪೂರ್ಣವಾಗಿ
            ನಡೆಸಿಕೊಂಡು ಬರಲಾಗುತ್ತಿದೆ. ಊರಪರವೂರ ಅಪಾರ ಭಕ್ತಾಧಿಗಳು ಈ ಸಾನಿಧ್ಯಕ್ಕೆ
            ಚಿತ್ತೈಸಿ ತಾಯಿಯ ಮುಂದೆ ಪ್ರಾರ್ಥಿಸಿಕೊಂಡು ತಮ್ಮ ಕಷ್ಟಕಾರ್ಪಣ್ಯಗಳನ್ನು
            ಪರಿಹರಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದಾರೆ. ಈ ಕ್ಷೇತ್ರದ ವತಿಯಿಂದ ನಡೆಯುವ ಬಾಚಕೆರೆ ಶ್ರೀ
            ದುರ್ಗಾಪರಮೇಶ್ವರೀ ಯಕ್ಷಗಾನ ಮಂಡಳಿಯು ನಾಡಿನ ವಿವಿದೆಡೆ ಕಲಾಪ್ರದರ್ಶನ ನೀಡುತ್ತಾ
            ಯಶಸ್ವಿ ಐದು ವರ್ಷಗಳನ್ನು ಪೂರೈಸಿದ್ದು ಈ ಮೂಲಕ ಯಕ್ಷಗಾನ ಕಲೆ ಮತ್ತು ಕಲಾವಿದರ
            ಬೆಳವಣಿಗೆಗೂ ಪ್ರೋತ್ಸಾಹವನ್ನು ನೀಡಲಾಗುತ್ತಿದೆ. ಪ್ರತಿವರ್ಷ ಶಾಲಾ ಮಕ್ಕಳಿಗೆ
            ಉಚಿತವಾಗಿ ಪುಸ್ತಕ ವಿತರಿಸುವ ಮೂಲಕ ಶೈಕ್ಷಣಿಕ ಕ್ಷೇತ್ರದ ಪ್ರಗತಿಗೂ
            ಶ್ರಮಿಸಲಾಗುತ್ತಿದೆ.
            {!showMore && (
              <>
                ... {/* Add ellipsis to indicate more content */}
              </>
            )}
          </p>

          {/* Slow motion additional content */}
          <div
            ref={contentRef}
            style={{ overflow: "hidden", width: "full",height: showMore ? "auto" : "0" }}
          > 
          <br></br>
            {showMore && (
              <p
                className="md:pl-10 md:pr-10 leading-3 text-justify text-red-900 font-serif font-semibold"
                style={{ lineHeight: "1.6em",
                 }}
              >
                {/* Additional content */}
                ತುಳುನಾಡಿನ ಪುಣ್ಯಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಕಾಲಕಾಲಕ್ಕೆ ನಡೆಯುವ ಪೂಜೆ, ಉತ್ಸವಾದಿಗಳು
                ಮಾನವ ಕುಲದ ಬದುಕಿಗೆ ಶಾಂತಿ, ನೆಮ್ಮದಿಯನ್ನು ನೀಡುವುದರೊಂದಿಗೆ ಸಮಾಜ
                ಸತ್ಪಥದಲ್ಲಿ ಮುನ್ನಡೆಯಲು ಪ್ರೇರಣೆಯಾದುದು. ... (Full content continues here)
              </p>
            )}
          </div>

          {/* Read More Button */}
          <div className="flex justify-center my-4">
            <button
              onClick={toggleShowMore}
              className="bg-red-900 gap-2 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-transform transform hover:scale-105"
            >
              {showMore ? "ಪುಟ್ಟ ಮಾಹಿತಿ" : "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ"}{" "}
              {showMore ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
