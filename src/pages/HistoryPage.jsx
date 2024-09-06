import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../App.css";
import oldphoto from "../images/oldphoto1.jpg";
import moola from "../images/moolasanidhya.JPG";
const HistoryPage = ({ id }) => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Animate the left-side divs to come from the left and right-side divs from the right
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

  return (
    <>
      <div className="w-full h-full flex p-10 px-50 py-50 bg-orange-100">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-4xl font-extrabold text-red-900 underline ">
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

            {/* Kannada Text below the Image */}
          </div>

          <p className="p-10 leading-30  text-justify text-red-900 font-serif font-semibold">
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
          </p>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
// <div id={id} className="history-section h-[100vh] w-full mb-3 mt-3 p-4">
//

//   <div
//     ref={(el) => (sectionsRef.current[0] = el)}
//     className="flex flex-col md:flex-row justify-around w-full mb-4 mt-4"
//   >
//     <div className="bg-red-500 left-div w-full md:w-1/2 h-auto p-4 text-justify flex-1"></div>
//     <div className="bg-blue-500 right-div w-full md:w-1/2 h-auto p-4 text-justify flex-1">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
//       doloribus, hic porro ipsum sapiente necessitatibus quisquam. Velit at,
//       veritatis expedita aliquam fuga enim reprehenderit impedit maiores
//       nihil dignissimos architecto asperiores!
//     </div>
//   </div>

//   <div
//     ref={(el) => (sectionsRef.current[1] = el)}
//     className="flex flex-col md:flex-row justify-around w-full mb-4 mt-4"
//   >
//     <div className="bg-green-500 left-div w-full md:w-1/2 h-auto p-4 text-justify flex-1">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
//       doloribus, hic porro ipsum sapiente necessitatibus quisquam. Velit at,
//       veritatis expedita aliquam fuga enim reprehenderit impedit maiores
//       nihil dignissimos architecto asperiores!
//     </div>
//     <div className="bg-yellow-500 right-div w-full md:w-1/2 h-auto p-4 text-justify flex-1"></div>
//   </div>

//   <div
//     ref={(el) => (sectionsRef.current[2] = el)}
//     className="flex flex-col md:flex-row justify-around w-full mb-4 mt-4"
//   >
//     <div className="bg-purple-500 left-div w-full md:w-1/2 h-auto p-4 text-justify flex-1"></div>
//     <div className="bg-pink-500 right-div w-full md:w-1/2 h-auto p-4 text-justify flex-1">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
//       doloribus, hic porro ipsum sapiente necessitatibus quisquam. Velit at,
//       veritatis expedita aliquam fuga enim reprehenderit impedit maiores
//       nihil dignissimos architecto asperiores!
//     </div>
//   </div>
// </div>
