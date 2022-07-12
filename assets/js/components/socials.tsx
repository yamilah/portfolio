import * as React from "react"

export default class Socials extends React.Component {
  render() {
    return (
      <aside className="socials">
        <a href="https://linkedin.com/in/yamilah" className="social-link">
          Lnkd↗
        </a>
        <a href="https://dribbble.com/yamilah" className="social-link">
          Drib↗
        </a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hello@yamilah.com" target="_blank" className="social-link">
          Mail↗
        </a>
      </aside>
    )
  }
}
