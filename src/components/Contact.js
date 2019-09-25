import React, { Component } from "react";

import Particles from "react-particles-js";

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

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="contact">
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline title">{this.props.title}</h1>
              <p className="title">
                If you have a project that you want to get started, then get in
                touch.
              </p>

              <hr />

              <a
                href="mailto:banafshe.khosravi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary"
                id="bttn"
              >
                <i class="fa fa-envelope" aria-hidden="true"></i>
                {this.props.button}
              </a>
              <hr />
              <ul className="social wow rubberBand">
                <li>
                  <a
                    href="https://github.com/Banafsheh-Khosravi"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/banafshehNia"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/banafsheh-khosravi-nia-51165791/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <Particles params={particleOpt} />
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#home">
              <i className="icon-up-circle" />
            </a>
          </p>
        </header>{" "}
        {/* Header End */}
      </React.Fragment>
    );
  }
}
