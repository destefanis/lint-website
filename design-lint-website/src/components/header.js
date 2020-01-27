import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="wrapper">
    <div className="nav-wrapper">
      <div className="logo">
        <a href="#">Design Lint</a>
      </div>
      <nav className="nav">
        <a className="nav-item" target="_blank" href="https://github.com/destefanis/design-lint">Github</a>
        <a className="nav-item" target="_blank" href="https://www.figma.com/c/plugin/801195587640428208/Design-Lint">Install Plugin</a>
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
