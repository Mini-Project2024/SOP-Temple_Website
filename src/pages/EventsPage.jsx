import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowForward';

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
        <div id={id}>
            <div className="top-pattern"></div>

            <section className="events-section py-12 text-center overflow-hidden relative min-h-screen">
                <div className="w-screen overflow-hidden relative min-h-[600px]">
                    <h2 className="text-4xl mb-5 text-gray-800">ಕಾರ್ಯಕ್ರಮಗಳು</h2>

                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        ref={containerRef}
                        style={{ width: `${totalFeatures * itemWidth}%`, height: '400px' }}
                    >
                        {[
                            { title: 'ಮಾರ್ಚ್ 25:', description: 'ಜಾತ್ರಾ ಮಹೋತ್ಸವ.' },
                            { title: 'ದಸರಾ:', description: 'ವಿಶೇಷ ಹಬ್ಬಗಳು ಮತ್ತು ಪೂಜೆ.' },
                            {
                                title: 'ವರಮಹಾಲಕ್ಷ್ಮಿ ಪೂಜೆ:',
                                description: 'ಭಕ್ತಿಯಿಂದ ಹಾಗೂ ಅದ್ದೂರಿಯಾಗಿ ಆಚರಣೆ.',
                            },
                            {
                                title: 'ಮಾಸಿಕ ಪೂಜೆಗಳು:',
                                description: `ಪ್ರತಿ ಸಂಕ್ರಾಂತಿ: ಮಧ್ಯಾಹ್ನ ವಿಶೇಷ ಪೂಜೆ
                                ನಾಗ ತಂಬಿಲ ಮತ್ತು ಅನ್ನಸಂತರ್ಪ.`,
                            },
                            {
                                title: 'ಪ್ರತಿ ವಾರದ ಪೂಜೆಗಳು:',
                                description: `ಪ್ರತಿ ಶುಕ್ರವಾರ: ಬೆಳಗ್ಗೆ 8:00
                                ಮಧ್ಯಾಹ್ನ ವಿಶೇಷ ಪೂಜೆ ಮತ್ತು ಅನ್ನದಾನ: ಮಧ್ಯಾಹ್ನ 12:30
                                ರಾತ್ರಿ ಪೂಜೆ: ರಾತ್ರಿ 7:30.`,
                            },
                            {
                                title: 'ಗಣೇಶ ಚತುರ್ಥಿ:',
                                description: 'ವಿಶೇಷ ಪೂಜೆ ಮತ್ತು ಹಬ್ಬ.',
                            },
                            {
                                title: 'ಯಕ್ಷಗಾನ ತಂಡ:',
                                description: 'ಬಚ್ಚಕೆರೆ ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ಯಕ್ಷಗಾನ ಮಂಡಳಿ, ಸರ್ಪಾಡಿ.',
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="w-[25%] p-5 box-border group"
                            >
                                <div className="bg-white border border-gray-200 rounded-3xl shadow-md p-5 h-full flex flex-col justify-between group-hover:bg-[#182856] group-hover:text-white transition-colors duration-300">
                                    <h3 className="text-xl text-[#182856] mb-3 font-semibold group-hover:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-700 group-hover:text-gray-300">
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
                            
                            sx={{ color: '#fff', backgroundColor: '#182856', '&:hover': { backgroundColor: '#0f1a2b' } }}
                        >
                            <ArrowLeftIcon />
                        </IconButton>
                        <IconButton
                            color="primary"
                            onClick={slideRight}
                            
                            sx={{ color: '#fff', backgroundColor: '#182856', '&:hover': { backgroundColor: '#0f1a2b' } }}
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
