import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SliderProps {
    images: string[];
}

const Slider: React.FC<SliderProps> = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    console.log("slider", images);

    useEffect(() => {
        if (images.length === 0) return; 

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    if (images.length === 0) {
        return <div>No images available</div>; // Handle no images case
    }

    return (
        <div className="relative w-full overflow-hidden">
            <div
               className="flex transition-transform duration-500"
               style={{
                   transform: `translateX(-${currentIndex * 100}%)`,
               }}
               
            >
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={img}
                            alt={`Slide ${img}`}
                            className="w-full h-[180px] md:h-[300px] object-cover"
                        />
                    </motion.div>
                ))}
            </div>
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={goToPrevious}
            >
                &lt;
            </button>
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={goToNext}
            >
                &gt;
            </button>
        </div>
    );
};

export default Slider;
