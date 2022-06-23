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
        <Link
          className="home-case-one-link"
          to="/houseparty"
        >
          View this study
        </Link>
      </section>
    )
  }
}
