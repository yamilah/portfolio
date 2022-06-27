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
          alt="This link takes you back to this website's home"
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
          alt="This link takes you to my CV, also called a resume"
        >
          CV↗
        </a>
      </nav>
    )
  }
}
