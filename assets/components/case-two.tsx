import * as React from "react"
import {Link} from "react-router-dom"

export default class CaseTwo extends React.Component {
  render() {
    return (
      <section className="case-two">
        <p className="case-two-subtext">
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
        <p className="case-two-text-1">
          Hall of famer
        </p>
        <p className="case-two-text-2">
          2018—2019
        </p>
        <p className="case-two-text-3">
          prediction—
        </p>
        <p className="case-two-text-4">
          based
        </p>
        <p className="case-two-text-5">
          sports app
        </p>
        <Link
          className="case-two-link"
          to="/hofr"
        >
          case study→→
          <span className="case-two-link-icons">
            →→→→→
          </span>
        </Link>
      </section>
    )
  }
}
