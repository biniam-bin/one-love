import React from 'react'
import Carousel from 'react-elastic-carousel'
import { HeroContainer, HomeContainer, AttractionContainer } from './style'
import { IoIosArrowForward } from "react-icons/io"


const Hero = () => {
  return (
    <HeroContainer>
      <img src="/images/fasil.jpg" alt="" />
      <span>
        <h1>A full-service architecture firm based in Ozark, Missouri</h1>
        <button>Learn more <IoIosArrowForward /></button>
      </span>

    </HeroContainer>
  )
}


const Attractions = () => {
  return (
    <AttractionContainer>

      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, eos expedita est consectetur porro reprehenderit.
        {/* <span></span> */}
      </h1>
      {/* //////////////////////// */}

      <div className="attractions-grid">
        <div className="attraction-img">
          <img src="/images/fasil.jpg" alt="" />
        </div>
        <div className="line"></div>
        <div className="attraction-info">
          <h4>Gondar</h4>
          <p>Gondar was the 17th century capital of Ethiopia, and is notable for its Medieval Castles and churches. The city’s unique Imperial compound contains a number of Castles built between 1632 and 1855 by various Emperors who reigned during this period. These dramatic Castles, unlike any other in Africa, display richness in architecture that reveals the Axumite traditions as well as the influence of Arabia.</p>
        </div>
      </div>

      {/* //////////////////////// */}
      <div className="attractions-grid">

        <div className="attraction-info">
          <h4>Gondar</h4>
          <p>Gondar was the 17th century capital of Ethiopia, and is notable for its Medieval Castles and churches. The city’s unique Imperial compound contains a number of Castles built between 1632 and 1855 by various Emperors who reigned during this period. These dramatic Castles, unlike any other in Africa, display richness in architecture that reveals the Axumite traditions as well as the influence of Arabia.</p>
        </div>
        <div className="line"></div>
        <div className="attraction-img">
          <img src="/images/fasil.jpg" alt="" />
        </div>
      </div>

      {/* //////////////////////// */}

      <div className="attractions-grid">
        <div className="attraction-img">
          <img src="/images/fasil.jpg" alt="" />
        </div>
        <div className="line"></div>
        <div className="attraction-info">
          <h4>Gondar</h4>
          <p>Gondar was the 17th century capital of Ethiopia, and is notable for its Medieval Castles and churches. The city’s unique Imperial compound contains a number of Castles built between 1632 and 1855 by various Emperors who reigned during this period. These dramatic Castles, unlike any other in Africa, display richness in architecture that reveals the Axumite traditions as well as the influence of Arabia.</p>
        </div>
      </div>

      {/* //////////////////////// */}
    </AttractionContainer>
  )
}


function HomePage() {
  return (
    <HomeContainer>
      <Hero />
      <Attractions />
    </HomeContainer>
  )
}

export default HomePage