import * as React from "react"
import {Link} from "react-router-dom"

export default class HomeCaseTwo extends React.Component {
  render() {
    return (
      <section className="home-case-two">
        <Link
          to="/hofr"
        >
          this is a link
        </Link>
      </section>

    )
  }
}
