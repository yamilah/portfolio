import * as React from "react"
import {Link} from "react-router-dom"

export default class HomeCaseTwo extends React.Component {
  render() {
    return (
      <section className="home-case-two">
        hall of famer
        <Link
          className="home-case-two-link"
          to="/hofr"
        >
          View this study
        </Link>
      </section>

    )
  }
}
