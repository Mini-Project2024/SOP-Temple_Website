import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowForward';
import Mandir from '../images/Mandir.svg';
import diya from '../images/Diya.svg';

const TempleEvent = ({ id }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const totalFeatures = 7;
    const visibleFeatures = 4;
    const itemWidth = 100 / visibleFeatures;
    const margin = 100; 
    useEffect(() => {
        gsap.set(containerRef.current, { x: 0 });
    }, []);

    const slideLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            gsap.to(containerRef.current, {
                x: `+=${itemWidth}%`,
                duration: 0.5,
                ease: 'power2.inOut',
            });
        } else {
            setCurrentIndex(totalFeatures - 1);
            gsap.to(containerRef.current, {
                x: `-${(totalFeatures - 1) * itemWidth - margin}%`, 
                duration: 0.5,
                ease: 'power2.inOut',
            });
        }
    };
    
    const slideRight = () => {
        if (currentIndex < totalFeatures - visibleFeatures) {
            setCurrentIndex(currentIndex + 1);
            gsap.to(containerRef.current, {
                x: `-=${itemWidth}%`,
                duration: 0.5,
                ease: 'power2.inOut',
            });
        } else {
            setCurrentIndex(0);
            gsap.to(containerRef.current, {
                x: `0%`, 
                duration: 0.5,
                ease: 'power2.inOut',
            });
        }
    };

    return (
        <div id={id} style={{
            backgroundImage: 'linear-gradient(to bottom, rgb(244, 119, 40) 50%, #fff7e7 50%)',
            backgroundSize: '90% 110%',
            height: '100vh',
            position: 'relative',
        }}>
            <div className="top-pattern"></div>

            <section className="events-section py-12 text-center overflow-hidden relative min-h-screen">
                <div
                    className="absolute md:top-0 md:left-0 xs:w-0 h-48 md:w-full z-20" // Adjusted z-index
                    style={{
                        backgroundImage: `url(${diya})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        pointerEvents: 'none', // Prevent blocking clicks
                    }}
                ></div>

                <div className="absolute top-0 right-0 xs:w-0 h-full md:w-full z-20"> {/* Adjusted z-index */}
                    <div
                        className="h-48 w-full"
                        style={{
                            backgroundImage: `url(${diya})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            transform: "rotate(180deg) scaleY(-1)", // Flip vertically for reflection effect
                            pointerEvents: 'none', // Prevent blocking clicks
                        }}
                    ></div>
                </div>
                <div className="absolute top-[80px] left-0 md:h-[300px] w-[50vw] bg-no-repeat bg-left bg-contain sm:h-[250px] xs:h-[250px] animate-slideInLeft" style={{ 
                     backgroundImage : `url(${Mandir})`} }></div>
                 <div className="absolute top-[80px] left-[730px] md:h-[300px] w-[50vw] bg-no-repeat bg-left bg-contain sm:h-[250px] xs:h-[250px] animate-slideInLeft" style={{ 
                     backgroundImage : `url(${Mandir})`,transform: "rotate(180deg) scaleY(-1)", } }></div>
                <div className="w-screen overflow-hidden relative min-h-[600px] z-30"> {/* Adjusted z-index */}
                    <h2 className="text-4xl font-bold mb-5 text-gray-800">ಕಾರ್ಯಕ್ರಮಗಳು</h2>

                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        ref={containerRef}
                        style={{ width: `${totalFeatures * itemWidth}%`, height:  '450px', marginTop:100}}
                    >
                        {[
        { 
            title: 'ಜಾತ್ರಾ ಮಹೋತ್ಸವ', 
            description: 'ಮಾರ್ಚ್ 25: ನಮ್ಮ ದೇವಸ್ಥಾನದಲ್ಲಿ ನಡೆಯುವ ವರ್ಷದ ಬಹು ಮುಖ್ಯ ಸಮಾರಂಭವಾಗಿದೆ. ಈ ದಿನ ಭಕ್ತರು ವಿವಿಧ ಧಾರ್ಮಿಕ ವಿಧಿವಿಧಾನಗಳಲ್ಲಿ ಭಾಗವಹಿಸುತ್ತಾರೆ, ಮೆರವಣಿಗೆಗಳು, ಭಜನೆಗಳು ಮತ್ತು ವಿಶೇಷ ಪೂಜೆಗಳು ನಡೆಯುತ್ತವೆ. ಊರಿನ ಎಲ್ಲಾ ಜನರು ಮತ್ತು ಹೊರಗಿನ ಭಕ್ತರು ಬಂದು ತಮ್ಮ ಜೀವನವನ್ನು ಧಾರ್ಮಿಕತೆಯಿಂದ ತುಂಬಿಸಿಕೊಳ್ಳುತ್ತಾರೆ.', 
            icon: 'https://cdn-icons-png.flaticon.com/512/4093/4093225.png' 
        },
        { 
            title: 'ದಸರಾ', 
            description: 'ವಿಶೇಷ ಹಬ್ಬಗಳು ಮತ್ತು ಪೂಜೆ: ದಸರಾ ಹಬ್ಬದ ವಿಶೇಷ ದಿನಗಳಲ್ಲಿ, ದೇಗುಲದಲ್ಲಿ ವಿಶೇಷ ಪೂಜೆಗಳು, ಹೋಮಗಳು, ಮತ್ತು ಶ್ರೀ ದೇವಿಯ ವಿವಿಧ ರೂಪಗಳಿಗೆ ಅರ್ಪಿಸುವ ವಿಶೇಷ ಪೂಜೆಗಳು ನಡೆಯುತ್ತವೆ. ಈ ದಿನಗಳಲ್ಲಿ ನಮ್ಮ ಸಂಪ್ರದಾಯಗಳು ಮತ್ತು ಕಲೆಗಳು ಪ್ರತಿ ಕೋಣೆಯಲ್ಲೂ ಕಂಡುಬರುತ್ತವೆ, ಭಕ್ತರು ಭಕ್ತಿ ಮತ್ತು ಆದರದಿಂದ ಈ ಹಬ್ಬವನ್ನು ಆಚರಿಸುತ್ತಾರೆ.', 
            icon: ' https://cdn-icons-png.flaticon.com/512/4284/4284428.png' 
        },
        { 
            title: 'ವರಮಹಾಲಕ್ಷ್ಮಿ ಪೂಜೆ', 
            description: 'ವರಮಹಾಲಕ್ಷ್ಮಿ ಪೂಜೆಯಂದು, ಭಕ್ತರು ಶ್ರೀ ಮಹಾಲಕ್ಷ್ಮಿ ದೇವಿಯ ಆರಾಧನೆ ಮಾಡುತ್ತಾರೆ. ಈ ಪೂಜೆ ಮನೆಯ ಒಳ್ಳೆಯದಕ್ಕೆ, ಸಂಪತ್ತು ಮತ್ತು ಸಮೃದ್ಧಿಗೆ ಅರ್ಥೈಸುತ್ತದೆ. ಪೂಜೆಯ ನಂತರ ದೇವಿಯ ಸನ್ನಿಧಾನದಲ್ಲಿ ಹೋಮ ಮತ್ತು ಅನ್ನಸಂತರ್ಪಣೆ ಇತ್ಯಾದಿ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ, ಇದು ನಮ್ಮ ಸಮುದಾಯದಲ್ಲಿ ಸಹಭಾಗಿತ್ವದ ಭಾವನೆ ಹೆಚ್ಚಿಸುತ್ತದೆ.', 
            icon: 'https://cdn-icons-png.flaticon.com/512/15371/15371815.png' 
        },
        { 
            title: 'ಮಾಸಿಕ ಪೂಜೆಗಳು', 
            description: 'ಪ್ರತಿ ಸಂಕ್ರಾಂತಿ: ಈ ದಿನದಂದು ಮಧ್ಯಾಹ್ನದಲ್ಲಿ ವಿಶೇಷ ಪೂಜೆ ನಡೆಯುತ್ತದೆ. ಈ ಪೂಜೆ ನಾಗ ದೇವರನ್ನು ಆರಾಧಿಸುವ ಹಾಗೂ ಭೂಮಿ ಮತ್ತು ಬೆಳೆಗಳಿಗೆ ಉತ್ತಮ ಹಸಿರು ಇರುವುದು ಎಂದು ನಂಬಿಕೆಯಾಗಿದೆ. ನಂತರ ಅನ್ನಸಂತರ್ಪಣೆ ಮತ್ತು ಪ್ರಸಾದ ವಿತರಣೆ ನಡೆಯುತ್ತದೆ. ಇದು ನಮ್ಮ ನೆರೆಹೊರೆಯವರ ಜೊತೆ ಅಭಿಮಾನ ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಒಕ್ಕೂಟ ಬಲಪಡಿಸಲು ಸಹಕಾರಿ.', 
            icon: 'https://cdn-icons-png.flaticon.com/512/4791/4791033.png' 
        },
        { 
            title: 'ಪ್ರತಿ ವಾರದ ಪೂಜೆಗಳು', 
            description: 'ಪ್ರತಿ ಶುಕ್ರವಾರ: ಶುಕ್ರವಾರದಂದು ಬೆಳಗ್ಗೆ 8:00ಕ್ಕೆ ದೇವಿಯ ಸನ್ನಿಧಿಯಲ್ಲಿ ವಿಶೇಷ ಪೂಜೆ ಮತ್ತು ಮಧ್ಯಾಹ್ನ 12:30ಕ್ಕೆ ಅನ್ನದಾನ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ. ರಾತ್ರಿ 7:30ಕ್ಕೆ ನಡೆಯುವ ಪೂಜೆ, ದೇಗುಲದ ಶಾಂತಿಯ ಪೂರ್ಣತೆಯನ್ನು ಸಮರ್ಪಿಸುತ್ತವೆ. ಈ ಪೂಜೆಗಳು ಭಕ್ತರಲ್ಲಿ ಭಕ್ತಿ ಮತ್ತು ಶಾಂತಿಯ ಅನುಭವವನ್ನು ತರುತ್ತವೆ.', 
            icon: 'https://cdn-icons-png.flaticon.com/512/8574/8574987.png' 
        },
        { 
            title: 'ಗಣೇಶ ಚತುರ್ಥಿ', 
            description: 'ವಿಶೇಷ ಪೂಜೆ ಮತ್ತು ಹಬ್ಬ: ಗಣೇಶ ಚತುರ್ಥಿಯಂದು, ಭಕ್ತರು ಶ್ರದ್ಧೆಯಿಂದ ಗಣೇಶನನ್ನು ಆರಾಧಿಸುತ್ತಾರೆ. ಪೂಜೆಯ ಸಮಯದಲ್ಲಿ ವಿವಿಧ ವಿಶೇಷ ಧಾರ್ಮಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ, ಗಣಪತಿ ವಿಸರ್ಜನೆಯ ಸಮಯದಲ್ಲಿ ಮೆರವಣಿಗೆಗಳು ಮತ್ತು ಭಜನೆಗಳು ಕೂಡ ನಡೆಯುತ್ತವೆ. ಈ ಹಬ್ಬವು ಸಂತೋಷ, ಸಮೃದ್ಧಿ, ಮತ್ತು ಶ್ರದ್ಧೆಯನ್ನು ತಂದುಕೊಡುತ್ತದೆ.', 
            icon: 'https://cdn-icons-png.flaticon.com/512/8574/8574910.png' 
        },
        { 
            title: 'ಯಕ್ಷಗಾನ ತಂಡ', 
            description: 'ಬಚ್ಚಕೆರೆ ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಯಕ್ಷಗಾನ ಮಂಡಳಿ, ಸರ್ಪಾಡಿ: ಈ ತಂಡವು, ನಮ್ಮ ಸಮುದಾಯದ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯ ಹೆಮ್ಮೆಯಾಗಿದೆ. ದೇಗುಲದ ಹಬ್ಬದ ಸಮಯದಲ್ಲಿ, ಯಕ್ಷಗಾನದ ಮೂಲಕ ದೇವರುಗಳ ಮಹತ್ವವನ್ನು, ಧರ್ಮದ ವಿಚಾರಗಳನ್ನು, ಮತ್ತು ಜೀವನದ ನೀತಿಯನ್ನು ಕಲಿಸಲು ಸಹಾಯಕವಾಗಿದೆ. ಯಕ್ಷಗಾನ ಪ್ರೇಮಿಗಳು ಇದನ್ನು ಅತ್ಯಂತ ಆಸಕ್ತಿಯಿಂದ ವೀಕ್ಷಿಸುತ್ತಾರೆ.', 
            icon: 'https://cdn-icons-png.flaticon.com/512/564/564102.png' 
        },
    ].map((feature, index) => (
                            <div
                                key={index}
                                className="w-[25%] p-5 box-border group"
                            >
                               <div className="bg-white border border-gray-200 rounded-3xl shadow-md p-5 h-full flex flex-col justify-between group-hover:bg-[#182856] group-hover:text-white transition-colors duration-300">
                               <img src={feature.icon} alt="" className="h-12 w-12 mb-4" />
<h3 className="text-xl text-[#182856] mb-3 font-semibold group-hover:text-white text-left">
    {feature.title}
</h3>

                                    <p className="text-gray-700 group-hover:text-gray-300" style={{ textAlign: 'justify', lineHeight: '1.6em' }}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows at the bottom */}
                    <div className="flex justify-center mt-4">
                        <IconButton
                            color="primary"
                            onClick={slideLeft}
                            sx={{marginRight:1.5 ,color: '#fff', backgroundColor: '#182856', '&:hover': { backgroundColor: '#0f1a2b' } }}
                        >
                            <ArrowLeftIcon />
                        </IconButton>
                        <IconButton
                            color="primary"
                            onClick={slideRight}
                            sx={{marginLeft:1.5, color: '#fff', backgroundColor: '#182856', '&:hover': { backgroundColor: '#0f1a2b' } }}
                        >
                            <ArrowRightIcon />
                        </IconButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TempleEvent;
