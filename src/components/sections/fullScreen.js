import React from "react";

export default class FullScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    const image = this.props.data;
    return (
      <div className="fullScreen-section">
        <div data-uk-slideshow>
          <ul
            className="uk-slideshow-items"
            data-uk-height-viewport="min-height: 100"
          >
            {image && (
              <li>
                <img src={image.src} alt={image.alt} data-uk-cover />
                <div className="uk-position-center uk-position-small">
                  <h1>{image.content && image.content.heading}</h1>
                  <p>{image.content && image.content.title}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
