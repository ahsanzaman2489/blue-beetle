import React from "react";

export default class Tab extends React.Component {
  render() {
    return (
      <div className="uk-container ">
        <div className="tabs-section">
          <ul data-uk-tab="connect:#data">
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
          </ul>

          <ul className="uk-switcher uk-margin" id="data">
            <li>
              <div className="uk-grid" data-uk-grid>
                <div className="uk-width-1-2@m">
                  <img
                    src="./assets/images/Tab-Images/Kotor,+Montenegro.jpg"
                    alt="Kotor"
                  />
                </div>
                <div className="uk-width-1-2@m">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  <p>
                    consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Sed ut
                  </p>
                  <a href="#" className="uk-button uk-button-primary">
                    buy now
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-grid" data-uk-grid>
                <div className="uk-width-1-2@m">
                  <img
                    src="./assets/images/Tab-Images/Shkodër,+Albania (Unicode Encoding Conflict).jpg"
                    alt="Shkodër"
                  />
                </div>
                <div className="uk-width-1-2@m">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum. Sed
                  ut
                </div>
              </div>
            </li>
            <li>
              <div className="uk-grid" data-uk-grid>
                <div className="uk-width-1-2@m">
                  <img
                    src="./assets/images/Tab-Images/Sveti+Stefan,+Montenegro.jpg"
                    alt="Sveti"
                  />
                </div>
                <div className="uk-width-1-2@m">
                  <h4>Lorem ipsum dolor sit amet</h4>
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum. Sed
                  ut
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
