
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from './assets/imgs/blankDropper.jpg';
import slide2 from './assets/imgs/blankDrooperMultiple.jpg';
import slide3 from './assets/imgs/lotion.jpg';
import slide4 from './assets/imgs/foamy.jpg';
import slide5 from './assets/imgs/pinkMoistureStand.jpg'
import slide6 from './assets/imgs/pinkMoisture.jpg'
import logoInt from './assets/imgs/logoNoC.png'
import vegan from './assets/imgs/crultyFree.png'

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption

} from 'reactstrap';

const items = [
  {
    src: `${ slide1 }`,
    altText: 'Slide 1',
    width: "300px",
    height: "500px",
    caption: 'Slide 1'
  },
  {
    src: `${ slide2 }`,
    altText: 'Slide 2',
    width: "300px",
    height: "500px",
    caption: 'Slide 2'
  },
];
const items2 = [
  {
    src: `${ slide3 }`,
    altText: 'Slide 1',
    width: "300px",
    height: "500px",
    caption: 'Slide 1'
  },
  {
    src: `${ slide4 }`,
    altText: 'Slide 2',
    width: "300px",
    height: "500px",
    caption: 'Slide 2'
  },

];
const items3 = [
  {
    src: `${ slide5 }`,
    altText: 'Slide 1',
    width: "300px",
    height: "500px",
    caption: 'Slide 1'
  },
  {
    src: `${ slide6 }`,
    altText: 'Slide 2',
    width: "300px",
    height: "500px",
    caption: 'Slide 2'
  },
];


const LandingPage = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width={item.width} height={item.height}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  const slides2 = items2.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width={item.width} height={item.height}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  const slides3 = items3.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width={item.width} height={item.height}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });


  return (
    <div>
      <main className="landingMain">
        <div className="introDiv-border">
          <div className="introDiv">
            <img className="intro" src={logoInt} alt="fny logo" />
            <p className="intro-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
          </div>
        </div>
      </main>

      <section className="caroselSection">
        <Carousel className="caro"
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          >
          <CarouselIndicators className="carouselIndicators" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        
        <Carousel className="caro"
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          >
          <CarouselIndicators className="carouselIndicators" items={items2} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides2}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
   

        <Carousel className="caro"
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          >
          <CarouselIndicators className="carouselIndicators" items={items3} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides3}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </section>
      <section>
        <img src={vegan} alt="crulty free logos"/>
      </section>

    </div>
    
  );
}


export default LandingPage;