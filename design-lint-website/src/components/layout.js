/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./app.css"
import "./fonts/inter.css"

const Layout = ({ slug, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer className="footer">
          <div className="banner-wrapper banner-wrapper--footer">
            <h2 className="banner-title banner-title--footer">
              This project was built for fun and as a way to give back to the design community. If you’d like give me a <a href="https://twitter.com/it_daniel_d">follow on twitter</a> or come build cool stuff with me at Discord, <a href="https://discordapp.com/jobs?team=design">we’re hiring!</a>
            </h2>
            <svg className="linter-svg" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M59.2592 0H39.1111C36.4929 0 34.3704 2.1225 34.3704 4.74074V24.8889C34.3704 27.5071 36.4929 29.6296 39.1111 29.6296H59.2592C61.8775 29.6296 64 27.5071 64 24.8889V4.74074C64 2.1225 61.8775 0 59.2592 0Z" fill="white" />
                <path d="M47.4074 17.286L44.9363 14.8149L44.0948 15.6504L47.4074 18.963L54.5185 11.8519L53.683 11.0164L47.4074 17.286Z" fill="#002245" />
                <path d="M59.2592 34.3704H39.1111C36.4929 34.3704 34.3704 36.4929 34.3704 39.1111V59.2593C34.3704 61.8775 36.4929 64 39.1111 64H59.2592C61.8775 64 64 61.8775 64 59.2593V39.1111C64 36.4929 61.8775 34.3704 59.2592 34.3704Z" fill="white" />
                <path d="M47.4074 51.6564L44.9363 49.1852L44.0948 50.0208L47.4074 53.3334L54.5185 46.2223L53.683 45.3867L47.4074 51.6564Z" fill="#002245" />
                <path d="M24.8889 34.3704H4.74074C2.1225 34.3704 0 36.4929 0 39.1111V59.2593C0 61.8775 2.1225 64 4.74074 64H24.8889C27.5071 64 29.6296 61.8775 29.6296 59.2593V39.1111C29.6296 36.4929 27.5071 34.3704 24.8889 34.3704Z" fill="white" />
                <path d="M13.0371 51.6564L10.566 49.1852L9.72449 50.0208L13.0371 53.3334L20.1482 46.2223L19.3126 45.3867L13.0371 51.6564Z" fill="#002245" />
                <path d="M24.8889 0H4.74074C2.1225 0 0 2.1225 0 4.74074V24.8889C0 27.5071 2.1225 29.6296 4.74074 29.6296H24.8889C27.5071 29.6296 29.6296 27.5071 29.6296 24.8889V4.74074C29.6296 2.1225 27.5071 0 24.8889 0Z" fill="#FF896F" />
                <path d="M18.6074 10.074L14.8148 13.8666L11.0222 10.074L10.0741 11.0221L13.8667 14.8147L10.0741 18.6073L11.0222 19.5555L14.8148 15.7629L18.6074 19.5555L19.5556 18.6073L15.763 14.8147L19.5556 11.0221L18.6074 10.074Z" fill="white" />
              </g>
            </svg>
          </div>
          <div className="credit"><a href="http://danieldoes.design">Made by Daniel Destefanis</a></div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
