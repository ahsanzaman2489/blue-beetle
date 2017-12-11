import React from "react";
import Slider from "react-slick";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="uk-container">
        <h5>join mailing list</h5>
        <form>
          <div className="uk-grid" data-uk-grid>
            <div className="uk-width-1-2@m">
              <div>
                <label className="uk-form-label">Name</label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <button className="uk-button ">submit</button>
            </div>
            <div className="uk-width-1-2@m">
              <div>
                <label className="uk-form-label">Email address</label>
                <div className="uk-form-controls">
                  <input
                    className="uk-input"
                    id="form-stacked-text"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
