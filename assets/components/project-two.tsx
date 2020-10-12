import * as React from "react"
import {Link} from "react-router-dom"

export default class ProjectTwo extends React.Component {
  render() {
    return (
      <section className="two">
        <p className="two-subtext">
          <span>
            pull the
          </span>
          <span>
            stops
          </span>
          <span>
            with us
          </span>
        </p>
        <p className="two-text-1">
          Hall of famer
        </p>
        <p className="two-text-2">
          2018—2019
        </p>
        <p className="two-text-3">
          prediction—
        </p>
        <p className="two-text-4">
          based
        </p>
        <p className="two-text-5">
          sports app
        </p>
        <Link
          className="two-link"
          to="/hofr"
        >
          case study→→
          <span className="two-link-icons">
            →→→→→
          </span>
        </Link>
      </section>
    )
  }
}
