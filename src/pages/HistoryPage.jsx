import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../App.css";
import oldphoto from "../images/oldphoto1.jpg";
import moola from "../images/moolasanidhya.JPG";
import ganapati from "../images/ganesha.JPG";

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
      <div id={id} className="history w-full h-full flex p-3 bg-orange-100">
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
            className="px-10 py-1 leading-30 text-justify text-red-900 font-serif font-semibold"
            style={{ lineHeight: "1.6em" }}
          >
            ನಮ್ಮಿ ತುಳುನಾಡು ಸತ್ಯ, ನ್ಯಾಯ, ಧರ್ಮಕ್ಕೆ ಪ್ರಸಿದ್ಧಿ ಪಡೆದ ಪುಣ್ಯಭೂಮಿ.
            ಇಲ್ಲಿನ ಸಂಸ್ಕೃತಿ, ಆಚಾರ ವಿಚಾರಗಳು, ಆರಾಧನಾ ಪದ್ಧತಿಗಳು ಜಗತ್ತಿನೆಲ್ಲೆಡೆ
            ಪ್ರಖ್ಯಾತಿ ಪಡೆದಿರುವುದು ತುಳುನಾಡಿನ ಹೆಮ್ಮೆ, ತುಳುನಾಡಿನ ಪುಣ್ಯಕ್ಷೇತ್ರಗಳಲ್ಲಿ
            ಕಾಲಕಾಲಕ್ಕೆ ನಡೆಯುವ ಪೂಜೆ, ಉತ್ಸವಾದಿಗಳು ಮಾನವ ಕುಲದ ಬದುಕಿಗೆ ಶಾಂತಿ,
            ನೆಮ್ಮದಿಯನ್ನು ನೀಡುವುದರೊಂದಿಗೆ ಸಮಾಜ ಸತ್ಪಥದಲ್ಲಿ ಮುನ್ನಡೆಯಲು
            ಪ್ರೇರಣೆಯಾದುದು. ದ.ಕ.ಜಿಲ್ಲೆಯ ಬಂಟ್ವಾಳ ತಾಲೂಕಿನ ಮಣಿನಾಲ್ಕೂರು ಗ್ರಾಮದ
            ಬಾಚಕೆರೆ ಎಂಬಲ್ಲಿರುವ ಪ್ರಕೃತಿ ರಮಣೀಯ ಹಚ್ಚಹಸಿರ ಸುಂದರ ಪರಿಸರದಲ್ಲಿರುವ ಶ್ರೀ
            ದುರ್ಗಾಪರಮೇಶ್ವರೀ ಸಾನಿಧ್ಯವು ಭಕ್ತರ ನಂಬುಗೆಯ, ಇಷ್ಟಾರ್ಥ ಸಿದ್ಧಿಸುವ
            ಪುಣ್ಯನೆಲೆಯಾಗಿ ಪ್ರಸಿದ್ಧಿ ಪಡೆದಿದೆ. ಸುಮಾರು ಮೂರು ತಲೆಮಾರುಗಳ ಇತಿಹಾಸವಿರುವ
            ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರೀ ಅಮ್ಮನವರ ಮೂಲಸಾನಿಧ್ಯವನ್ನು ಇದೀಗ ಶ್ರೀ
            ದುರ್ಗಾಪರಮೇಶ್ವರೀ ದೇವಸ್ಥಾನವನ್ನಾಗಿ ರೂಪಿಸುವುದು ಸಮಸ್ತ ಭಕ್ತಾದಿಗಳ
            ಸಂಕಲ್ಪವಾಗಿದೆ.
            {!showMore && (
              <>... {/* Add ellipsis to indicate more content */}</>
            )}
          </p>
          <div
            ref={contentRef}
            style={{
              overflow: "hidden",
              width: "full",
              height: showMore ? "auto" : "0",
            }}
          >
            <p
              className="px-10 py-1 leading-30 text-justify text-red-900 font-serif font-semibold"
              style={{ lineHeight: "1.6em" }}
            >
              ಗಂಧರ್ವನೊಬ್ಬ ಶಾಪಗ್ರಷ್ಥ ನಾಗಿ ಭೂಮಿಯಲ್ಲಿ ರಾಕ್ಷಸನಾಗಿ ಹುಟ್ಟಿ ದುಷ್ಕೃತ್ಯ
              ಮಾಡುತ್ತಾ ಲೋಕಕಂಟಕನಾಗಿರುತ್ತಾನೆ ಆತನ ಹೆಸರು "ಬಾಚಾಸುರ". ಆತನ ಪೀಡನೆಯಿಂದ
              ಸಂಕಷ್ಟಕ್ಕೀಡಾದವರು ಕಾರಿಂಜ ಕ್ಷೇತ್ರಕ್ಕೆ ಹೋಗಿ ಶ್ರದ್ಧಾ ಭಕ್ತಿಯಿಂದ ಪಾರ್ವತಿ
              ದೇವಿಯಲ್ಲಿ ಪ್ರಾರ್ಥಿಸಿ ಕೊಂಡಾಗ ಮೈದೋರಿದ ಶ್ರೀ ದೇವಿ ಅಭಯವನಿತ್ತು
              ಅಂತರ್ಧಾನಳಾಗುವಳು. ರಾಕ್ಷಸನ ಅಟ್ಟಹಾಸ ಮಿತಿ ಮೀರಿದಾಗ ಶಕ್ತಿ ಸ್ವರೂಪಿಣಿ
              ಪಾರ್ವತಿ ದೇವಿ ರಾಕ್ಷಸನ ವಧೆಮಾಡುವಳು. ವಧಾ ಸಂದರ್ಭದಲ್ಲಿ ಶಾಪಗ್ರಸ್ತ ಗಂಧರ್ವ
              (ಬಾಚಾಸುರ) ನಿಜ ರೂಪವನ್ನು ಪ್ರಕಟಿಸಿ ಪ್ರಾರ್ಥಿಸುತ್ತಾನೆ, "ಜಗಜ್ಜನನೀ, ಈ
              ಭೂಮಿಯಲ್ಲಿ ಹುಟ್ಟಿ ಸತ್ಕಾರ್ಯ ಮಾಡದೆ, ದುಷ್ಕೃತ್ಯ ಅನ್ಯಾಯ ಅನಾಚಾರ ಮಾಡಿದ
              ಪರಿಣಾಮವಾಗಿ ನೀನೇ ನನ್ನನ್ನು ಶಾಪ ವಿಮೋಚನೆ ಮಾಡಿದೆ ನಿನ್ನಿಂದಾಗಿ ನನ್ನ ನಿಜ
              ಸ್ವರೂಪವು ಪ್ರಕಟವಾಯ್ತು ತಾಯೆ ನಿನಗೆ ಅನಂತ ಕೋಟಿ ಪ್ರಣಾಮಗಳು! ಮುಂದಕ್ಕೆ
              ನಿನ್ನೊಂದಿಗೆ ನನ್ನ ಹೆಸರನ್ನು ಶಾಶ್ವತಗೊಳಿಸು" ಎಂದು ಪ್ರಾರ್ಥಿಸುತ್ತಾನೆ ಅವನ
              ಆರ್ತ ನಾದದ ಭಿನ್ನಹಕ್ಕೆ ಶಾಂತಳಾಗಿ ಅಭಯವನ್ನು ನೀಡಿದ ಶ್ರೀದೇವಿ "ವಧಾ
              ಸಂದರ್ಭದಲ್ಲಿ ನಿನ್ನ ಶರೀರದಿಂದ ಹರಿದ ರಕ್ತ ಶೇಖರಣೆಗೊಂಡ ಹೊಂಡವೆ ಮುಂದಕ್ಕೆ
              ಕೆರೆಯಾಗುವುದು. ನನ್ನ ಸಾನ್ನಿಧ್ಯವನ್ನು ಮುಂದಕ್ಕೆ ಇಲ್ಲೆ ಪ್ರಕಟಿಸುತ್ತೇನೆ. ಈ
              ಸ್ಥಳವೇ ಬಾಚಕೆರೆ ಎಂದು ಮುಂದಕ್ಕೆ ಕರೆಯಲ್ಪಟ್ಟು ಪ್ರಸಿದ್ಧಿಯಾಗುವುದು. ಬಾಚ
              ಕೆರೆಯ ನೀರು ತೀರ್ಥವಾಗುವುದು. ಭಾವುಕ ಭಕ್ತರ ಇಚ್ಛಾರ್ಥ ಸಿದ್ಧಿಯಾಗುವಂತೆ ಶ್ರೀ
              ದುರ್ಗಾ ಪರಮೇಶ್ವರೀಯಾಗಿ ನನ್ನ ಅಸ್ತಿತ್ವವನ್ನು ಪ್ರಕಟಿಸುತ್ತೇನೆ. ಕಾಲಕ್ರಮೇಣ
              ಇದೊಂದು ಪವಿತ್ರ ಕ್ಷೇತ್ರವಾಗುವುದು. ಇಲ್ಲಿ ಬರುವ ಭಕ್ತರನ್ನು ಉದ್ಧಾರ
              ಮಾಡುತ್ತೇನೆ" ಎಂದು ಅಭಯ ನೀಡುವಳು. <b>ಇದುವೇ ಬಾಚಕೆರೆ ಕ್ಷೇತ್ರ</b>.
            </p>
            <br></br>
            <center>
              <div className="ganesha ">
                <img src={ganapati} className="image3" alt="old photo" />
                <p className="text-center text-xl font-bold text-red-900 mt-3">
                  ಶ್ರೀ ಗಣಪತಿ
                </p>
              </div>
            </center>

            {/* Slow motion additional content */}

            {showMore && (
              <p
                className="px-10 py-1 leading-30 text-justify text-red-900 font-serif font-semibold"
                style={{ lineHeight: "1.6em" }}
              >
                {/* Additional content */}
                ನಾನು ದಯಾನಂದ ಶೆಟ್ಟಿ, ಮುಂಬೈ ಹಾಗೂ ನನ್ನ ಗೆಳೆಯ ಪ್ರಭುಲಾಲ್ ಬಾಲುದೇವರ್
                ತಾಂಜೋರ್, ನಾವು ಒಂದು ದಿನ ರಾತ್ರಿ ಮುಂಬೈಯಲ್ಲಿ ಕೆಲಸ ಮುಗಿಸಿ ಮಲಗಿದ್ದೆವು.
                ಬೆಳಗ್ಗೆ ಸುಮಾರು ಆರು ಗಂಟೆಗೆ ನನ್ನ ಗೆಳೆಯ ನನ್ನನ್ನು "ಶೆಟ್ಟಿ ಸಾಬ್" ಎಂದು
                ಕರೆಯುತ್ತಾ "ನನ್ನ ಅಮ್ಮನ ಜೊತೆಗೆ ಸೇರಿಸು" ಎಂದು ಹೇಳುತ್ತಿದ್ದ. ನಾನು
                ನಿದ್ದೆಯಿಂದ ಎದ್ದು "ಸುಮ್ಮನೇ ಮಲಗು" ಎಂದು ಹೇಳಿ ಮತ್ತೆ ಮಲಗಿದೆ. ಬೆಳಿಗ್ಗೆ
                ಎದ್ದ ತಕ್ಷಣ ನಾನು ಅವನ ಬಳಿ ಕೇಳಿದೆ "ರಾತ್ರಿ ಏನೋ ಹೇಳಿದೆಯಲ್ಲ, ಅದು
                ಏನು?". ಅದಕ್ಕೆ ಅವನು ಹೇಳಿದ "ನನ್ನ ಕನಸಿನಲ್ಲಿ ಗಣಪತಿ ವಿಗ್ರಹ ಬಂದು
                'ನನ್ನನ್ನು ನನ್ನ ಅಮ್ಮನ ಜತೆ ಸೇರಿಸು' ಎಂದು ಹೇಳಿದ ಹಾಗೆಯಾಗಿದೆ" ಎಂದು.
                ಅದಕ್ಕೆ ನಾನು "ಅಮ್ಮ ಎಂದರೆ ದೇವಿಯ ದೇವಸ್ಥಾನ" ಎಂದು ತಿಳಿದೆ.ಅದೆ ಸಮಯದಲ್ಲಿ
                ಸರಪಾಡಿಯ ಬಾಚಕೆರೆಯಲ್ಲಿ ಬ್ರಹ್ಮಕಲಶ ನಡೆಯುತ್ತಿರುವ ಬಗ್ಗೆ ತಿಳಿದುಕೊಂಡೆ.
                ಕೂಡಲೇ ದೇಜಪ್ಪನವರಿಗೆ ಕರೆಮಾಡಿ ನಮಲ್ಲಿ ಇನ್ನೂರು ವರ್ಷಗಳ ಪುರಾತನ ಕಾಲದ
                ಗಣಪತಿ ವಿಗ್ರಹ ಇದೆ ಎಂದು ತಿಳಿಸಿದೆ, ಅವರು ದೇವಾಲಯಕ್ಕೆ ಪ್ರತಿಷ್ಠೆ ಮಾಡಲು
                ವಿಗ್ರಹವನ್ನು ಹುಡುಕುತ್ತಿದ್ದರು. ತಮ್ಮ ಬಲಿ ಆ ವಿಗ್ರಹವನ್ನು ತಲುಪಿಸಲು
                ಹೇಳಿದರು, ನಾನು ತಲುಪಿಸಲು ಎರಡು ಬಾರಿ ಪ್ರಯತ್ನ ಪಟ್ಟೆ, ಆದರೆ ನನ್ನಿಂದ
                ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ನಂತರ ಗೆಳಯನ ಬಳಿ "ನೀನೆ ತಲುಪಿಸು" ಎಂದು ಹೇಳಿದೆ. ಅವನಿಗೆ
                ಬಸ್ಸಿನ ವ್ಯವಸ್ಥೆ ಮಾಡಿ, ಕೂಡಲೇ ಅವನನ್ನು ಮಂಗಳೂರು ಸರಪಾಡಿ ಬಾಚಕೆರೆಗೆ
                ಗಣಪತಿ ವಿಗ್ರಹದೊಂದಿಗೆ ಕಳುಹಿಸಿದೆ. ಅಲ್ಲಿಂದ ಕಟೀಲು ಅಮ್ಮನವರ ಮುಂದೆ
                ವಿಗ್ರಹವನ್ನು ಇಟ್ಟಾಗ ದೇಜಪ್ಪನವರು ಗೆಳೆಯನ ಬಳಿ "ನಿಮ್ಮ ಮುಖದಲ್ಲಿ ಏನೋ
                ಬೇಸರ ಇದೆಯಲ್ಲ" ಎಂದು ಕೇಳಿದರು. ಆಗ ಪ್ರಭುಲಾಲ್ ರವರು ತಮ್ಮ ತಾಯಿಗೆ
                ಹುಷಾರಿಲ್ಲ ಹಾಸಿಗೆಯಲ್ಲಿ ಮಲಗಿದ್ದಾಳೆ ಎಂದು ತಿಳಿಸಿದರು. ಆಗ ದೇಜಪ್ಪನವರು
                ಪ್ರಸಾದವನ್ನು ನೀಡಿದವರು "ನೀನು ಈಗಲೇ ಹಿಂದಕ್ಕೆ ತಿರುಗದೆ ಊರಿಗೆ ಹೋಗು"
                ಎಂದು ಹೇಳಿದರು. ಪ್ರಭುಲಾಲ್ ರವರು ನೇರ ತಮಿಳು ನಾಡಿನ ತಮ್ಮ ಮನೆಗೆ ಹೋಗಿ
                ತಮ್ಮ ತಾಯಿಗೆ ಪ್ರಸಾದವನ್ನು ನೀಡಿದರು. ಅವರ ತಾಯಿ ಮರು ದಿನವೇ ಹುಷಾರಾದರು.
                ಪ್ರಭುಲಾಲ್ ರವರು ನನಗೆ ಕರೆಮಾಡಿ "ಪ್ರಸಾದದಿಂದ ನನ್ನ ತಾಯಿ
                ಹುಷಾರಾಗಿದ್ದಾರೆ" ಎಂದು ತಿಳಿಸಿದರು. ನಾನು ದೇಜಪ್ಪನವರಿಗೆ ಕರೆಮಾಡಿ ಈ ವಿಷಯ
                ತಿಳಿಸಿದಾಗ ಅವರು "ಪ್ರಸಾದದ ಮೂಲಕ ಅವರ ತಾಯಿ ಹುಷಾರಾಗಿಲ್ಲ, ಪ್ರಭುಲಾಲ್
                ರವರು ಗಣಪತಿ ದೇವರನ್ನು ತಮ್ಮ ತಾಯಿಗೆ ಒಪ್ಪಿಸಿದರಿಂದ ಪ್ರಭುಲಾಲ್ ಗೆ ಅವರ
                ತಾಯಿ ಸಿಕ್ಕಿರುವುದಾಗಿ ತಿಳಿಸಿದರು."
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
