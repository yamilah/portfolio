import * as React from "react"

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer-text-1">
          Wanna
        </p>
        <p className="footer-text-2">
          link—
        </p>
        <p className="footer-text-3">
          up?
        </p>
        <a
          className="footer-link-1"
          href="https://linkedin.com/in/yamilah"
        >
          LinkedIn↗
        </a>
        <a
          className="footer-link-2"
          href="https://dribbble.com/yamilah"
        >
          Dribbbble↗
        </a>
        <a
          className="footer-link-3"
          href="https://github.com/yamilah"
        >
          GitHub↗
        </a>
        <a
          className="footer-link-4"
          href="mailto:info@yamilah.com"
        >
          Mail↗
        </a>
        <p className="footer-subtext">
          <span>
            By Yamilah,
          </span>
          <span>
            with love
          </span>
        </p>
      </footer>
    )
  }
}
