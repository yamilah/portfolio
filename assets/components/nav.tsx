import * as React from "react"
import {Link} from "react-router-dom"

interface NavState {
  menuEnabled: boolean
}

export default class Nav extends React.Component<{}, NavState> {
  constructor(props) {
    super(props)

    this.state = {
      menuEnabled: false
    }
  }

  onHamburger() {
    this.setState({menuEnabled: !this.state.menuEnabled})
  }

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
          <ul className={`nav-list ${this.state.menuEnabled ? "nav-list--active" : ""}`}>
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
          </ul>
          <button
            aria-controls="navigation"
            aria-label="Menu"
            className={`hamburger hamburger--slider nav-menu ${this.state.menuEnabled ? "is-active" : ""}`}
            type="button"
            onClick={this.onHamburger.bind(this)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </nav>
        <div
          className="nav-marquee"
          role="banner"
        >
          <div className="nav-marquee-text-wrapper">
            <p className="nav-marquee-text">
              It’s jah • mee • lah btw
            </p>
            <p className="nav-marquee-text">
              It’s jah • mee • lah btw
            </p>
            <p className="nav-marquee-text">
              It’s jah • mee • lah btw
            </p>
            <p className="nav-marquee-text">
              It’s jah • mee • lah btw
            </p>
            <p className="nav-marquee-text">
              It’s jah • mee • lah btw
            </p>
            <p className="nav-marquee-text">
              It’s jah • mee • lah btw
            </p>
          </div>
        </div>
      </div>
    )
  }
}
