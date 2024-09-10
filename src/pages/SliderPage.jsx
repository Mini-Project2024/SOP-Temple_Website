import React, { useState, useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import "../css/slider.css";

function SliderPage({ id, children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  // const [timeID, setTimeID] = useState(null);

  // useEffect(() => {
  //   if (slideDone) {
  //     setSlideDone(false);
  //     setTimeID(
  //       setTimeout(() => {
  //         slideNext();
  //         setSlideDone(true);
  //       }, 5000)
  //     );
  //   }
  // }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= React.Children.count(children) - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return React.Children.count(children) - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  const renderSliderItem = (item, index) => {
    if (!React.isValidElement(item)) {
      console.error(`Invalid item at index ${index}:`, item);
      return null;
    }
  
    const isVideo = item.props.src.toLowerCase().endsWith('.mp4');
    
    return (
      <div
        className={`slider__item slider__item-active-${activeIndex + 1}`}
        key={index}
      >
        {isVideo ? (
          <video
            className="w-auto h-auto max-w-[90%] max-h-[90%] object-contain"
            src={item.props.src}
            alt={item.props.alt}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          React.cloneElement(item, {
            className: "w-auto h-auto max-w-[90%] max-h-[90%] object-contain"
          })
        )}
      </div>
    );
  };

  return (
    <div
      id={id}
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {React.Children.map(children, (child, index) => renderSliderItem(child, index))}

      <div className="container__slider__links">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            className={
              activeIndex === index
                ? "container__slider__links-small container__slider__links-small-active"
                : "container__slider__links-small"
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}
          ></button>
        ))}
      </div>

      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        <ArrowForwardIcon />
      </button>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        <ArrowBackIcon />
      </button>
    </div>
  );
}

export default SliderPage;