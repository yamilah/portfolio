import * as React from "react"
import {Link} from "react-router-dom"

export default class About extends React.Component {
  render() {
    return (
      <div>
        about
        <Link to="/">main</Link>
      </div>
    )
  }
}
