import * as React from "react"
import {Link} from "react-router-dom"

export default class Main extends React.Component {
  render() {
    return (
      <div>
        main
        <Link to="/about">about</Link>
      </div>
    )
  }
}
