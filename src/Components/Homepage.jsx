import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SolarImage1 from '../assets/images/solarImage1.jpg'
import SolarImage2 from '../assets/images/solarimage2.jpg'
import SolarImage3 from '../assets/images/windmil1.jpg'
import "../assets/Style/coursel.css"

function Home() {
    return (
        <div>
            <Carousel 
             autoPlay
             infiniteLoop
             interval={1700}  // 3 seconds interval
             showThumbs={false}
             className="carousel"
            >
                <div className="carousel-image">
                    <img src={SolarImage1} alt="image 1"/>
                    {/* <div className="carousel-slogan">
                        "Empowering the Future with Solar Energy"
                    </div> */}
                </div>
                <div className="carousel-image">
                    <img src={SolarImage2} />
                    {/* <div className="carousel-slogan">
                        "Harnessing the Power of the Sun"
                    </div> */}
                </div>
                <div className="carousel-image">
                    <img src={SolarImage3} />
                    {/* <div className="carousel-slogan">
                        "Sustainable Energy for a Greener Tomorrow"
                    </div> */}
                </div>
            </Carousel>
            <div className="carousel-slogan">
                "Empowering the Future with Solar Energy"
            </div>
        </div>
    );
}

export default Home;