import * as React from "react"
import * as ReactDOM from "react-dom"
import Main from "./components/pages/main"

class Root extends React.Component {
  render() {
    return (
      <Main></Main>
    )
  }
}

window.addEventListener("DOMContentLoaded", event => {
  ReactDOM.render(<Root />, document.getElementById("root"))
})
