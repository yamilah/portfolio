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
            </Link>
          </li>
          <li className="nav-list-item nav-list-item--first">
            <Link
              className="nav-list-item-link"
              to="/"
            >
              Work
            </Link>
          </li>
          <li className="nav-list-item nav-list-item--last">
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
