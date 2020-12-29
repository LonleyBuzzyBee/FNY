import React, {useState} from 'react'
// import { Slides } from './Slides';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 3 ? 0 : currentIndex + 1);
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 3 : currentIndex - 1);
  }

  console.log(currentIndex)

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={ prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
   

          
      {/* {slides.map((slide2, index) => {
        return (
          <div className={index == currentIndex + 1 ? "slide-a" : "slidee"} key={index}>
            {index === currentIndex && (

              <h3>{slide2.title} {index}</h3>
             
           )}
          </div>
        );
      })}
          
        {slides.map((slide3, index) => {
          return (
            <div className={index == currentIndex + 2 ? "slide-a" : "slidee"} key={index}>
              {index === currentIndex && (

              <h3>{slide3.title}  {index}</h3>
              )}
          </div>
        );
      })} */}
    </section>

  )
}

export default ImageSlider
