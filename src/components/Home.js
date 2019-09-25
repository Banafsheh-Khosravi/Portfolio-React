import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Particles from "react-particles-js";
import WOW from "wowjs";
const particleOpt = {
  particles: {
    numbers: {
      value: 170,
      density: {
        enable: true,
        value_areas: 500
      }
    },
    color: {
      value: "#fff"
    },
    opacity: {
      value: 1,
      anim: {
        enable: true,
        speed: 8,
        opacity_min: 0.5,
        sync: false
      }
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 7,
      random: true
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 3,
      direction: "right",
      straight: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      }
    }
  }
};

export default class Home extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <React.Fragment>
        <header id="home" className="responsive-headline wow zoomIn">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="home" title="Hide navigation">
              Hide navigation
            </a>

            <ul id="nav">
              <li className="current">
                <a className="smoothscroll nav" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll nav" href="#about">
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1TvjS81ql5Stz4TteQRrjqU8SokUsTudhxbDcsfdtUTM/edit"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="nav"
                >
                  Resume
                </a>
              </li>

              <li>
                <a className="smoothscroll nav" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              {/* <Image
                src="./images/bani.png"
                style={{ width: 50, height: 50 }}
              /> */}
              <h1 className="responsive-headline wow rollIn title">
                {this.props.title}
              </h1>
              <p className="title"> a Software Developer.</p>
              <p className="title">
                Ruby on Rails | HTML | CSS | Bootstrap| JavaScript | PostgreSQL
                | React
              </p>
              <Image
                className="wow flip"
                src="./images/rails.png"
                style={{ width: 50, height: 50 }}
              />
              |
              <Image
                className="wow flip"
                src="./images/html5.png"
                style={{ width: 50, height: 50 }}
              />
              |
              <Image
                className="wow flip"
                src="./images/css3.png"
                style={{ width: 50, height: 50 }}
              />
              |
              <Image
                className="wow flip"
                src="./images/bootstrap.png"
                style={{ width: 50, height: 50 }}
              />
              |
              <Image
                className="wow flip"
                src="./images/javascript.png"
                style={{ width: 50, height: 50 }}
              />
              |
              <Image
                className="wow flip"
                src="./images/postgresql.png"
                style={{ width: 80, height: 80 }}
              />
              |
              <Image
                className="wow flip"
                src="./images/react.png"
                style={{ width: 50, height: 50 }}
              />
              |
              <Particles params={particleOpt} />
              <hr />
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
