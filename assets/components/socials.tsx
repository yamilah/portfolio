import * as React from "react"

export default class Socials extends React.Component {
  render() {
    return (
      <aside className="socials">
        <a href="https://linkedin.com/in/yamilah" className="socials-link">
          lnkd↗
        </a>
        <a href="https://dribbble.com/yamilah" className="socials-link">
          drbb↗
        </a>
        <a href="https://github.com/yamilah" className="socials-link">
          gthb↗
        </a>
        <a href="mailto:info@yamilah.com" className="socials-link">
          mail↗
        </a>
      </aside>
    )
  }
}
