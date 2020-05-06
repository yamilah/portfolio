import * as React from "react"
import * as ReactDOM from "react-dom"
import Test from "./components/test"

class Root extends React.Component {
  render() {
    return <div><Test /></div>
  }
}

window.addEventListener("DOMContentLoaded", event => {
  ReactDOM.render(<Root />, document.getElementById("root"))
})
