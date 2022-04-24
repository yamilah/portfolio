import * as React from "react"
import * as ReactDOM from "react-dom"

class Root extends React.Component {
  render() {
    return (
      <div>idk hi</div>
    )
  }
}

window.addEventListener("DOMContentLoaded", event => {
  ReactDOM.render(<Root />, document.getElementById("root"))
})
