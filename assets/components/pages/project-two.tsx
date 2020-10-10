import * as React from "react"
import {Link} from "react-router-dom"

export default class ProjectTwo extends React.Component {
  render() {
    return (
      <section className="one">
        <p className="one-subtext">
          <span>
            Where the
          </span>
          <span>
            party at?
          </span>
        </p>
        <p className="one-text-1">
          Houseparty
        </p>
        <p className="one-text-2">
          2019
        </p>
        <p className="one-text-3">
          social media
        </p>
        <p className="one-text-4">
          & video
        </p>
        <p className="one-text-5">
          chatting web—
        </p>
        <p className="one-text-6">
          app
        </p>
        <Link to="/" className="one-link">
          case study→→→→→→→
        </Link>
      </section>
    )
  }
}
