import * as React from "react"

export default class Intro extends React.Component {
  render() {
    return (
      <section className="intro">
        <h1 className="intro-heading">
          Yamilah Atallah&nbsp;
          <span className="intro-heading-emphasis">
            is a designer and developer in the SF Bay Area.
          </span>
        </h1>
        <ul className="intro-text-list">
          <li className="intro-text-list-item">
            it’s pronounced jah • mee • lah btw
          </li>
          <li className="intro-text-list-item intro-text-list-item--left">
            it’s pronounced jah • mee • lah btw
          </li>
          <li className="intro-text-list-item intro-text-list-item--left">
            it’s pronounced jah • mee • lah btw
          </li>
          <li className="intro-text-list-item intro-text-list-item--left">
            it’s pronounced jah • mee • lah btw
          </li>
          <li className="intro-text-list-item intro-text-list-item--left">
            it’s pronounced jah • mee • lah btw
          </li>
        </ul>
        <a href="mailto:info@yamilah.com" className='intro-link--left'>
          Let’s talk.
        </a>

        <p className='intro-link--right'>
          Work ↓
        </p>
      </section>
    )
  }
}
