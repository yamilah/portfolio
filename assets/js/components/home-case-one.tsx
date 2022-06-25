import * as React from "react"
import {Link} from "react-router-dom"

export default class HomeCaseOne extends React.Component {
  render() {
    return (
      <section className="home-case-one">
        <h1 className="home-case-one-heading-1">
          house
        </h1>
        <h1 className="home-case-one-heading-2">
          party
        </h1>
        <div className="home-case-one-link-wrapper">
          <Link
            className="home-case-one-link"
            to="/houseparty"
          >
            <span className="home-case-one-link-text-1">
              view
            </span>
            <span className="home-case-one-link-text-2">
              this
            </span>
            <span className="home-case-one-link-text-3">
              study
            </span>
            <span className="home-case-one-link-arrow">
              →
            </span>
          </Link>
        </div>
      </section>
    )
  }
}
