import * as React from "react"
import imgOne from "../../images/footer-line.svg"

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-text-wrapper">
          <p className="footer-text">
            let’s talk
          </p>
          <img
            alt="A decorative line"
            className="footer-line"
            src={imgOne}
          />
        </div>
        <a
          className="footer-link-1"
          href="https://linkedin.com/in/yamilah"
          alt="This link takes you to my LinkedIn profile"
        >
          <span className="footer-link-text-1">
            linkedin
          </span>
          <span className="footer-link-arrow-1">
            ↗
          </span>
        </a>
        <a
          className="footer-link-2"
          href="https://dribbble.com/yamilah"
          alt="This link takes you to my Dribbble profile"
        >
          <span className="footer-link-text-2">
            dribbble
          </span>
          <span className="footer-link-arrow-2">
            ↗
          </span>
        </a>
        <a
          className="footer-link-3"
          href="https://github.com/yamilah"
          alt="This link takes you to my Github profile"
        >
          <span className="footer-link-text-3">
            github
          </span>
          <span className="footer-link-arrow-3">
            →
          </span>
        </a>
        <a
          className="footer-link-4"
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@yamilah.com"
          alt="This link opens up your gmail client in browser and prefills info so you can send me an email"
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
