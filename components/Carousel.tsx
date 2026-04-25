"use client";
import React, { useState, useEffect, useCallback } from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";

interface CarouselProps {
  className?: string;
  slideClassName?: string;
  arrowClassName?: string;
    dotClassName?: string;
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  className = "",
  slideClassName = "",
  arrowClassName = "",
  dotClassName = "",
}) => {
  const [slides, setSlides] = useState<React.ReactNode[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (children && Array.isArray(children) && children.length > 0) {
      // Create a circular array of slides
      const extendedSlides = [
        ...children.slice(-1),
        ...children,
        ...children.slice(0, 1),
      ];
      setSlides(extendedSlides);
      setCurrentIndex(1); // Start at index 1 (first actual slide)
    }
  }, [children]);

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= slides.length - 1) {
        // If we're at the end, immediately jump to the second slide (index 1)
        setTimeout(() => setCurrentIndex(1), 300);
        return slides.length - 1;
      }
      return nextIndex;
    });
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      if (nextIndex < 0) {
        // If we're at the start, immediately jump to the second-to-last slide
        setTimeout(() => setCurrentIndex(slides.length - 2), 300);
        return 0;
      }
      return nextIndex;
    });
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index + 1); // +1 because of the extra slide at the beginning
  };

  const renderSlides = () => {
    return slides.map((slide, index) => {
      let slideClass = `transition-all duration-300 flex-shrink-0 w-full md:w-1/3 ${slideClassName}`;
      if (index === currentIndex) {
        slideClass += " opacity-100";
      } else if (index === currentIndex - 1 || index === currentIndex + 1) {
        slideClass += " opacity-60";
      } else {
        slideClass += " opacity-0";
      }
      return (
        <div key={index} className={slideClass}>
          {slide}
        </div>
      );
    });
  };

  // Adjust the translate value to properly center the visible slides
  const translateValue = isMobile
    ? `calc(-${currentIndex * 100}%)`
    : `calc(-${(currentIndex * 100) / 3}% + ${100 / 3}%)`;


  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${translateValue})` }}
      >
        {renderSlides()}
      </div>
      <button
        onClick={prev}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-10 ${arrowClassName}`}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-10 ${arrowClassName}`}
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.slice(1, -1).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex - 1 ? "bg-blue-500" : "bg-gray-300"
            } ${dotClassName}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
