import * as React from "react"
import CaseOne from "../case-one"
import CaseTwo from "../case-two"
import Footer from "../footer"
import Intro from "../intro"

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Intro />
        <CaseOne />
        <CaseTwo />
        <Footer />
      </div>
    )
  }
}
