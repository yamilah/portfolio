import * as React from "react"
import AboutBody from "../../components/about-body"
import Footer from "../footer"
import Intro from "../intro"

export default class About extends React.Component {
  render() {
    return (
      <section className="about">
        <Intro />
        <AboutBody />
        <Footer />
      </section>
    )
  }
}
