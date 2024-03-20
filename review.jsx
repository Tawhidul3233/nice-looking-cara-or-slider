"use client";
import { useState } from 'react';

const TestimonialCard = ({ text, author, location }) => (
  <div className="w-full md:w-auto card-sd rounded-md bg-white">
    <div className="text-start p-3">
      <p className="text-sm text-black leading-6">{text}</p>
      <h6 className="font-semibold py-1">{author}</h6>
      <p className="text-secondary text-sm">{location}</p>
    </div>
  </div>
);

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center md:py-10 py-6">
        {testimonials.map((testimonial, index) => {
          const cardIndex = (index - currentIndex + 1 + testimonials.length) % testimonials.length;
          const zIndex = testimonials.length - cardIndex;
          const scale = 1 - (Math.abs(cardIndex - 1) * 0.1); // Adjust scale for non-centered cards
          const opacity = cardIndex === 0 ? 1 : 0.7; // Adjust opacity for non-centered cards
          const transform = `scale(${scale}) translateX(${(cardIndex - 1) * 20}%)`; // Adjust translation for non-centered cards
          return (
            <div
              key={index}
              className="w-full card-sd rounded-md bg-white transform transition-all duration-300"
              style={{ zIndex, opacity, transform }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        <button onClick={handlePrev} className="mx-2 text-secondary">
          &lt;
        </button>
        <button onClick={handleNext} className="mx-2 text-secondary">
          &gt;
        </button>
      </div>
    </div>
  );
};

const Review = () => {
  const testimonials = [
    { text: 'Testimonial 1', author: 'Author 1', location: 'Location 1' },
    { text: 'Testimonial 2', author: 'Author 2', location: 'Location 2' },
    { text: 'Testimonial 3', author: 'Author 3', location: 'Location 3' },
    { text: 'Testimonial 4', author: 'Author 4', location: 'Location 4' },
    { text: 'Testimonial 5', author: 'Author 5', location: 'Location 5' },
    { text: 'Testimonial 6', author: 'Author 6', location: 'Location 6' },
    // Add more testimonials as needed
  ];

  return (
    <div className="container mx-auto">
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default Review;
