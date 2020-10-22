import * as React from "react"
import {Link} from "react-router-dom"

export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav-wrapper">
        <nav className="nav">
          <Link
            className="nav-link nav-link--home"
            to="/"
          >
            Yamilah Atallah
          </Link>
          <ul className="nav-list">
            <li className="nav-list-item">
              <a
                className="nav-link"
                href="https://bit.ly/atallah-cv"
              >
                CV↗
              </a>
            </li>
            <li className="nav-list-item">
              <Link
                className="nav-link"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-list-item nav-list-menu">
              menu
            </li>
          </ul>
        </nav>
        <div
          className="nav-marquee"
          role="banner"
        >
          <p className="nav-marquee-text">
            It’s jah • mee • lah btw
          </p>
        </div>
      </div>
    )
  }
}
