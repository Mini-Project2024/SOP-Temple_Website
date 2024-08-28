import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../App.css";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const HistoryPage = ({ id }) => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Animate sections on scroll
    sectionsRef.current.forEach((section, index) => {
      const leftDiv = section.querySelector('.left-div');
      const rightDiv = section.querySelector('.right-div');

      gsap.fromTo(
        leftDiv,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom", // Animation starts when the top of the section hits the bottom of the viewport
            end: "bottom top",  // Animation ends when the bottom of the section hits the top of the viewport
            scrub: 1, // Smoothly animate as you scroll
          },
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
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
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
