import React from "react";

export default class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        "DJI_0092.jpg",
        "DJI_0613.jpg",
        "DJI_0729-HDR.jpg",
        "DJI_0780.jpg",
        "DJI_0893-HDR.jpg",
        "Sagres,+Portugal+-+Portrait.jpg"
      ]
    };
  }
  render() {
    return (
      <div className="uk-container gallery-section">
        <div className="uk-grid-small" data-uk-grid>
          {this.state.images.map((item, index) => {
            return (
              <div className="uk-width-1-3@m" key={index}>
                <div
                  className="uk-background-cover  uk-grid-item uk-height-medium"
                  style={{
                    backgroundImage: `url(./assets/images/Grid-images/${item})`
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
