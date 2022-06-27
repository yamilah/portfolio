import * as React from "react"
import {Link} from "react-router-dom"

export default class HomeCaseTwo extends React.Component {
  render() {
    return (
      <section className="home-case-two">
        <h1 className="home-case-two-heading-1">
          hall
        </h1>
        <h1 className="home-case-two-heading-2">
          of
        </h1>
        <h1 className="home-case-two-heading-3">
          famer
        </h1>
        <div className="home-case-two-link-wrapper">
          <Link
            className="home-case-two-link"
            to="/hofr"
          >
            <span className="home-case-two-link-text-1">
              check
            </span>
            <span className="home-case-two-link-text-2">
              out
            </span>
            <span className="home-case-two-link-text-3">
              this
            </span>
            <span className="home-case-two-link-text-4">
              study
            </span>
            <span className="home-case-two-link-arrow">
              →
            </span>
          </Link>
        </div>
      </section>

    )
  }
}
