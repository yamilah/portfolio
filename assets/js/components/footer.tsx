import * as React from "react"

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <a
          className="footer-link"
          href="https://linkedin.com/in/yamilah"
        >
          <span className="footer-link-text-1">
            linkedin
          </span>
          <span className="footer-link-arrow-1">
            ↗
          </span>
        </a>
        <a
          className="footer-link"
          href="https://dribbble.com/yamilah"
        >
          <span className="footer-link-text-2">
            dribbble
          </span>
          <span className="footer-link-arrow-2">
            ↗
          </span>
        </a>
        <a
          className="footer-link"
          href="https://github.com/yamilah"
        >
          <span className="footer-link-text-3">
            github
          </span>
          <span className="footer-link-arrow-3">
            →
          </span>
        </a>
        <a
          className="footer-link"
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@yamilah.com"
        >
          <span className="footer-link-text-4">
            mail
          </span>
          <span className="footer-link-arrow-4">
            ↑
          </span>
        </a>
      </footer>

    )
  }
}
