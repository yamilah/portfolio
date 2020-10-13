import * as React from "react"
import {Link} from "react-router-dom"

export default class CaseOne extends React.Component {
  render() {
    return (
      <section className="case-one">
        <p className="case-one-subtext">
          <span>
            Where the
          </span>
          <span>
            party at?
          </span>
        </p>
        <p className="case-one-text-1">
          Houseparty
        </p>
        <p className="case-one-text-2">
          2019
        </p>
        <p className="case-one-text-3">
          social media
        </p>
        <p className="case-one-text-4">
          & video
        </p>
        <p className="case-one-text-5">
          chatting web—
        </p>
        <p className="case-one-text-6">
          app
        </p>
        <Link
          className="case-one-link"
          to="/houseparty"
        >
          case study→→
          <span className="case-one-link-icons">
            →→→→→
          </span>
        </Link>
      </section>
    )
  }
}
