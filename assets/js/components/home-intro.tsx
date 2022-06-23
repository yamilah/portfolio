import * as React from "react"
import imgOne from "../../images/home-intro-line-1.svg"

export default class HomeIntro extends React.Component {
  render() {
    return (
      <section className="home-intro">
        <h1 className="home-intro-heading-1">
          yam
        </h1>
        <h1 className="home-intro-heading-2">
          —il
        </h1>
        <h1 className="home-intro-heading-3">
          ah
        </h1>
        <img
          alt="A decorative line"
          className="home-intro-line-1"
          src={imgOne}
        />
      </section>
    )
  }
}
