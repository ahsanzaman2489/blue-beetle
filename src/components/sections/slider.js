import React from "react";
import Slider from "react-slick";

export default class SLider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 1
    };

    const images = [
      "DJI_0060+copy.jpg",
      "DJI_0063+copy.jpg",
      "DJI_0091+copy.jpg",
      "DJI_0382+copy.jpg",
      "DJI_0927+copy.jpg",
      "Zuaratz,+Spain+2-+Portrait.jpg"
    ];
    return (
      <div className="uk-container slider-section">
        <Slider {...settings}>
          {images.map((item, index) => {
            return (
              <div key={index}>
                <div className="slide-item">
                  <img
                    src={`./assets/images/Slider-Images/` + item}
                    alt={item}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
