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

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="about">
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline title">{this.props.title}</h1>
              <p className="wow fadeInRightBig title">
                Hello, my name is Bani.
                <br /> I am a software developer based in Ann Arbor, MI. <br />I
                have over 2 years of experience as a software developer. <br />
                My experience is in Ruby on Rails, Postgress, JavaScript,
                Bootstrap and React. I love creating things. <br />I have
                recieved my Master degree in Computer Science from The
                University of New Mexico,USA.
              </p>

              <hr />
              <Particles params={particleOpt} />
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#contact">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
