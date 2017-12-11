import React from "react";

export default class Navigation extends React.Component {
  render() {
    const navLinks = ["home", "about", "services", "projects", "contact"];
    return (
      <div className="uk-container">
        <nav
          className="uk-navbar-container uk-navbar uk-navbar-transparent"
          data-uk-navbar
        >
          <div className="uk-navbar-left logo">
            Sample<span>logo</span>
          </div>
          <div className="uk-navbar-right">
            <a
              className="uk-navbar-toggle uk-hidden@m"
              href="#"
              data-uk-toggle="target: #offcanvas-push"
            >
              <span className="uk-margin-small-left" style={{ color: "#000" }}>
                <b>MENU</b>
              </span>
            </a>
            <ul className="uk-navbar-nav uk-visible@m">
              {navLinks.map((item, index) => {
                return (
                  <li
                    key={index}
                    data-menuanchor={item}
                    className={index == 0 ? "active" : ""}
                  >
                    <a href={`#${item}`}>{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        <div id="offcanvas-push" data-uk-offcanvas="mode: push; overlay: true">
          <div className="uk-offcanvas-bar">
            <button
              className="uk-offcanvas-close"
              type="button"
              data-uk-close
            />
            <ul className="uk-navbar-nav">
              {navLinks.map((item, index) => {
                return (
                  <li
                    key={index}
                    data-menuanchor={item}
                    className={index == 0 ? "active" : ""}
                  >
                    <a href={`#${item}`}>{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
