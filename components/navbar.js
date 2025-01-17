import React from "react";

import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <>
      <header className="navbar-container">
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
            <nav className="navbar-links1">
              <span className="navbar-link11 thq-body-small thq-link">
                {props.link1}
              </span>
              <span
                onClick={() => props.scrollIntoView()}
                className="thq-body-small thq-link"
              >
                {props.link2}
              </span>
              <span
                onClick={() => props.scrollIntoView()}
                className="thq-body-small thq-link"
              >
                {props.link3}
              </span>
              <span
                onClick={() => props.scrollIntoView()}
                className="thq-body-small thq-link"
              >
                {props.link4}
              </span>
            </nav>
          </div>

          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <nav className="navbar-links1">
              <span className="navbar-link11 thq-body-small thq-link">
                {props.link1}
              </span>
            </nav>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navbar-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-links1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-link11 {
            font-size: 28px;
          }
          .navbar-buttons1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
          }
          .navbar-action11 {
            display: flex;
            flex-direction: row;
          }
          .navbar-burger-menu {
            display: none;
          }
          .navbar-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-logo {
            height: 3rem;
          }
          .navbar-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-links2 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-buttons2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
          }
          @media (max-width: 767px) {
            .navbar-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  );
};

Navbar.defaultProps = {
  logoSrc:
    "https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original",
  link4: "Business Partners",
  link5: "Contact Us",
  link1: "Home",
  logoAlt: "Metal-Plastic Hybrid 3D Printing",
  action2: "/shop",
  link2: "Shop",
  link3: "Designers",
  action1: "/",
};

Navbar.propTypes = {
  logoSrc: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  link1: PropTypes.string,
  logoAlt: PropTypes.string,
  action2: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  action1: PropTypes.string,
};

export default Navbar;
