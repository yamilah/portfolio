import * as React from "react"
import Footer from "../footer"
import Intro from "../intro"

export default class About extends React.Component {
  render() {
    return (
      <section className="about">
        <Intro />
        <Footer />
      </section>
    )
  }
}
