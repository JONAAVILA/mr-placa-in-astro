import { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import images from './images.js'
import './Slider.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const interval = 4000
  const visibleImages = 1

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1))
  };

  useEffect(() => {
    const autoPlay = setInterval(goToNextSlide, interval)
    return () => clearInterval(autoPlay)
  }, [currentIndex, interval]);

  const displayedImages = images.slice(currentIndex, currentIndex + visibleImages)

  return (
    <div className="carousel_services">
      <TransitionGroup  className="slide-container_services">
        {displayedImages.map((image, index) => (
          <CSSTransition
          key={currentIndex}
          timeout={1000}
          classNames="fade"
            >
            <div key={index} className="slide_services">
                <img src={image.img} alt={image.img} />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup >
    </div>
  )
}

export default Slider;