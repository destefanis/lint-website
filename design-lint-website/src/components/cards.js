import React from 'react';
import "./cards.css"

function Cards() {

  return (
    <section className="cards-wrapper">
      <div className="card-row">
        <div className="card">
          <h4 className="card-title">
            Do I need to refresh Design Lint?
          </h4>
          <p className="card-body">
            Nope! The plugin auto updates while it’s running 
            so you don’t have to refresh the app.
          </p>
        </div>
        <div className="card card--last">
          <h4 className="card-title">
            What does the refresh icon do?
          </h4>
          <p className="card-body">
            The refresh icon allows you to lint a new selection. 
            Once you’re done with a design, select a new frame 
            and smash that button.
          </p>
        </div>
      </div>
      <div className="card-row">
        <div className="card">
          <h4 className="card-title">
            How do I set my own border radius numbers?
          </h4>
          <p className="card-body">
          Border radius can be set in the plugins settings. 
          Clicking the settings icon will reveal the options. 
          These values will be stored until you restart Figma.
          </p>
        </div>
        <div className="card card--last">
          <h4 className="card-title">
            My team would love to lint for *insert idea*
          </h4>
          <p className="card-body">
          Awesome! I kept the plugin simple so it could be expanded by 
          other design teams. Fork it from <a href="https://github.com/destefanis/design-lint">Github</a> and let me 
          know if you have questions!
          </p>
        </div>
      </div>
    </section>
  );
}
export default Cards;