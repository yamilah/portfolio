import * as React from "react"
import {Link} from "react-router-dom"
import imgOne from "../../images/nav-logo.svg"

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Link
          className="nav-link-home"
          to="/"
        >
          <span className="nav-link-home-text-1">
            yamilah
          </span>
          <img
            alt="Site logo, a simple, orange circle"
            className="nav-link-home-logo"
            src={imgOne}
          />
          <span className="nav-link-home-text-2">
            com
          </span>
        </Link>
        <a
          href="https://bit.ly/atallah-cv"
          className="nav-link-cv"
        >
          CV↗
        </a>
      </nav>
    )
  }
}
