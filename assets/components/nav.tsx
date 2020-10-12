import * as React from "react"
import {Link} from "react-router-dom"

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link
              className="nav-link nav-link--first"
              to="/"
            >
              Yamilah Atallah
              <span className="nav-link-subtext">
                jah • mee • lah
              </span>
            </Link>
          </li>
          <li className="nav-list-item nav-list-link">
            <a
              className="nav-link"
              href="https://bit.ly/atallah-cv"
            >
              CV↗
            </a>
          </li>
          <li className="nav-list-item nav-list-link">
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
    )
  }
}
