import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

const PromotionSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderData, setSliderData] = useState([]);
  const slideLength = sliderData.length;

  useEffect(() => {
    fetch('/data/sliderData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSliderData(data);
      });
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  let slideInterval = null;
  let intervalTime = 5500;

  useEffect(() => {
    auto();
    return () => clearInterval(slideInterval);
  }, [auto, currentSlide, slideInterval]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slideLength);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slideLength) % slideLength);
  };

  return (
    <article className="promotion-slide">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? 'slide current' : 'slide'}
            key={index}
          >
            {index === currentSlide && <img src={slide.image} alt="slide" />}
          </div>
        );
      })}
      <div className="promotion-slide-arrow-icons">
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          className="arrow-icons"
          onClick={prevSlide}
          size="lg"
        />
        <FontAwesomeIcon
          icon={faArrowCircleRight}
          className="arrow-icons"
          onClick={nextSlide}
          size="lg"
        />
      </div>
    </article>
  );
};

export default PromotionSlide;
