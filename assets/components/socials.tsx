import * as React from "react"

export default class Socials extends React.Component {
  render() {
    return (
      <aside className="socials">
        <a
          className="socials-link"
          href="https://linkedin.com/in/yamilah"
        >
          lnkd↗
        </a>
        <a
          className="socials-link"
          href="https://dribbble.com/yamilah"
        >
          drbb↗
        </a>
        <a
          className="socials-link"
          href="https://github.com/yamilah"
        >
          gthb↗
        </a>
        <a
          className="socials-link"
          href="mailto:info@yamilah.com"
        >
          mail↗
        </a>
      </aside>
    )
  }
}
