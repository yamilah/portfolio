import * as React from "react"
import Footer from "../footer"
import Intro from "../intro"
import ProjectOne from "../project-one"
import ProjectTwo from "../project-two"

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Intro />
        <ProjectOne />
        <ProjectTwo />
        <Footer />
      </div>
    )
  }
}
