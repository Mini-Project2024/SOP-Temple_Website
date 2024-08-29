import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../App.css";

const HistoryPage = ({ id }) => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Animate the left-side divs to come from the left and right-side divs from the right
    sectionsRef.current.forEach((section, index) => {
      const leftDiv = section.querySelector('.left-div');
      const rightDiv = section.querySelector('.right-div');

      gsap.fromTo(
        leftDiv,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: index * 0.6 }
      );

      gsap.fromTo(
        rightDiv,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: index * 0.6 + 0.3 }
      );
    });
  }, []);

  return (
    <div id={id} className="history-section h-[100vh] w-full mb-3 mt-3 p-4">
      <h1 className="text-xl font-bold">ಇತಿಹಾಸ</h1>
      
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="flex flex-col md:flex-row justify-around w-full mb-4 mt-4"
      >
        <div className="bg-red-500 left-div w-full md:w-1/2 h-auto p-4 text-justify flex-1"></div>
        <div className="bg-blue-500 right-div w-full md:w-1/2 h-auto p-4 text-justify flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          doloribus, hic porro ipsum sapiente necessitatibus quisquam. Velit at,
          veritatis expedita aliquam fuga enim reprehenderit impedit maiores
          nihil dignissimos architecto asperiores!
        </div>
      </div>
      
      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        className="flex flex-col md:flex-row justify-around w-full mb-4 mt-4"
      >
        <div className="bg-green-500 left-div w-full md:w-1/2 h-auto p-4 text-justify flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          doloribus, hic porro ipsum sapiente necessitatibus quisquam. Velit at,
          veritatis expedita aliquam fuga enim reprehenderit impedit maiores
          nihil dignissimos architecto asperiores!
        </div>
        <div className="bg-yellow-500 right-div w-full md:w-1/2 h-auto p-4 text-justify flex-1"></div>
      </div>
      
      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        className="flex flex-col md:flex-row justify-around w-full mb-4 mt-4"
      >
        <div className="bg-purple-500 left-div w-full md:w-1/2 h-auto p-4 text-justify flex-1"></div>
        <div className="bg-pink-500 right-div w-full md:w-1/2 h-auto p-4 text-justify flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          doloribus, hic porro ipsum sapiente necessitatibus quisquam. Velit at,
          veritatis expedita aliquam fuga enim reprehenderit impedit maiores
          nihil dignissimos architecto asperiores!
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
