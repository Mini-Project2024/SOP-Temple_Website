import React, { useState } from 'react'
import '../App.css';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index, id) => {
    setActiveIndex(index);
    // Scroll to the corresponding section
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='px-8 py-4 flex bg-[#FFDE4D] justify-between'>
      <h3 className='text-xl font-bold'>ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಸ್ಥಾನ</h3>
      <nav>
        <ul className='flex gap-10 font-bold justify-center'>
          <li
            className={`nav-item ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleClick(0, 'history')}
          >
            ಇತಿಹಾಸ
          </li>
          {/* <li
            className={`nav-item ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleClick(1, 'puja')}
          >
            ಪೂಜೆ
          </li> */}
          <li
            className={`nav-item ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => handleClick(2, 'gallery')}
          >
            ಗ್ಯಾಲರಿ
          </li>
          <li
            className={`nav-item ${activeIndex === 3 ? 'active' : ''}`}
            onClick={() => handleClick(3, 'contact')}
          >
            ಸಂಪರ್ಕಿಸಿ
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
