import React from 'react';
import ReactPlayer from 'react-player';
import "./banner.css"

function Banner() {

  return (
    <div className="banner">
      <div className="banner-wrapper">
        <h2 className="banner-title">
        Design Lint checks for missing text, fill, stroke, and effects styles. It also catches incorrect border radius.
        </h2>
        <div class="video-wrapper">
          <ReactPlayer className="video" url='https://designlint.s3-us-west-2.amazonaws.com/design-lint-website-vid+(1).mp4' loop playing volume={0} muted width='100%' height='100%'/>
        </div>
      </div>
    </div>
  );
}
export default Banner;