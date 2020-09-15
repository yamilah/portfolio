import * as React from "react"
import {Link} from "react-router-dom"

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link
              className="nav-list-item-link"
              to="/"
            >
              Yamilah Atallah
              <span className="nav-list-item-guide">
                jah • mee • lah
              </span>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link
              className="nav-list-item-link"
              to="/"
            >
              Work
            </Link>
          </li>
          <li className="nav-list-item">
            <Link
              className="nav-list-item-link"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
