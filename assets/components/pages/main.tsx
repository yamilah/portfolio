import * as React from "react"
import Intro from "../intro"
import ProjectOne from "../project-one"

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Intro />
        <ProjectOne />
      </div>
    )
  }
}
