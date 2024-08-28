import React from "react";

const HistoryPage = ({ id }) => {
  return (
    <div id={id} className="history-section h-[100vh] w-full mb-3 mt-3 p-4">
      <h1 className="text-xl font-bold">ಇತಿಹಾಸ</h1>
      
      <div className="flex flex-col md:flex-row justify-around w-full mb-4 mt-4">
        <div className="bg-red-500 w-full md:w-1/2 h-auto p-4 text-justify flex-1"></div>
        <div className="bg-blue-500 w-full md:w-1/2 h-auto p-4 text-justify flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          doloribus, hic porro ipsum sapiente necessitatibus quisquam. Velit at,
          veritatis expedita aliquam fuga enim reprehenderit impedit maiores
          nihil dignissimos architecto asperiores!
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-around w-full mb-4 mt-4">
        <div className="bg-green-500 w-full md:w-1/2 h-auto p-4 text-justify flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          doloribus, hic porro ipsum sapiente necessitatibus quisquam. Velit at,
          veritatis expedita aliquam fuga enim reprehenderit impedit maiores
          nihil dignissimos architecto asperiores!
        </div>
        <div className="bg-yellow-500 w-full md:w-1/2 h-auto p-4 text-justify flex-1"></div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-around w-full mb-4 mt-4">
        <div className="bg-purple-500 w-full md:w-1/2 h-auto p-4 text-justify flex-1"></div>
        <div className="bg-pink-500 w-full md:w-1/2 h-auto p-4 text-justify flex-1">
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
