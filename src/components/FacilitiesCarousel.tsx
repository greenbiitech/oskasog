import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";


const FacilitiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const facilities = [
    {
      id: 1,
      image: "/images/oskasog-library-1.jpg",
      alt: "Campus library and study area"
    },
    {
      id: 2,
      image: "/images/computer-room.jpg", 
      alt: "Computer Room"
    },
    {
      id: 3,
      image: "/images/ogbagba-hall.jpg",
      alt: "OSKASOG Hall exterior building"
    },
    {
      id: 4,
      image: "/images/oskasog-smartboard-1.jpg",
      alt: "Students using modern technology facilities"
    },
 
    {
      id: 5,
      image: "/images/building.jpg",
      alt: "Administrative office complex"
    },
    {
      id: 6,
      image: "/images/oskasog-conference-hall-1.jpg",
      alt: "Conference and meeting rooms"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === facilities.length - 4 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, facilities.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === facilities.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? facilities.length - 4 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      onHoverStart={() => setIsAutoPlaying(false)}
      onHoverEnd={() => setIsAutoPlaying(true)}
    >
      {/* Navigation Buttons */}
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300"
        onClick={prevSlide}
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300"
        onClick={nextSlide}
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </motion.button>

      {/* Image Container */}
      <div className="overflow-hidden rounded-2xl">
        <motion.div
          className="flex gap-4"
          animate={{ x: -currentIndex * (100 / 4) + '%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ width: `${(facilities.length / 4) * 100}%` }}
        >
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              className="flex-shrink-0"
              style={{ width: `${100 / facilities.length}%` }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
                <Image
                  src={facility.image}
                  alt={facility.alt}
                  fill
                  className="object-cover" // Removed w-full h-full
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" // Adjusted for responsive layout
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: facilities.length - 3 }, (_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default FacilitiesCarousel;