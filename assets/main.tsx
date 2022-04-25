import * as React from "react"
import * as ReactDOM from "react-dom"
import Home from "./js/pages/home"

class Root extends React.Component {
  render() {
    return (
      <Home></Home>
    )
  }
}

window.addEventListener("DOMContentLoaded", event => {
  ReactDOM.render(<Root />, document.getElementById("root"))
})
