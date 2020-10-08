import * as React from "react"
import Intro from "../intro"

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Intro />
        <section>
          body
        </section>
      </div>
    )
  }
}
