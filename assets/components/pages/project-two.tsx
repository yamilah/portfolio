import * as React from "react"
import {Link} from "react-router-dom"

export default class ProjectTwo extends React.Component {
  render() {
    return (
      <section className="two">
        <p className="two-subtext">
          <span>
            Where the
          </span>
          <span>
            party at?
          </span>
        </p>
        <p className="two-text-1">
          Houseparty
        </p>
        <p className="two-text-2">
          2019
        </p>
        <p className="two-text-3">
          social media
        </p>
        <p className="two-text-4">
          & video
        </p>
        <p className="two-text-5">
          chatting web—
        </p>
        <p className="two-text-6">
          app
        </p>
        <Link to="/" className="two-link">
          case study→→→→→→→
        </Link>
      </section>
    )
  }
}
