import PropTypes from "prop-types"
import React from "react"

const Hero = () => (
  <div className="hero">
    <div className="content-wrapper">
      <div className="hero-content">
        <h1 className="title">
          Design Lint is a free and open source
          plugin for Figma built to help you find
          and fix errors in your designs.
        </h1>
        <a href="#" className="button">
          Install Plugin
        </a>
      </div>
      <div className="hero-images-wrapper">
        <div className="hero-images">
          <img className="hero-images__linter" src="https://designlint.s3-us-west-2.amazonaws.com/hero-linter.png" alt="Hero Linter Image" />
          <img className="hero-images__design" src="https://designlint.s3-us-west-2.amazonaws.com/hero-image.png" alt="Hero Image" />
        </div>
      </div>
    </div>
  </div>
)

export default Hero
