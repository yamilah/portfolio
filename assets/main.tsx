import * as React from "react"
import * as ReactDOM from "react-dom"

class Root extends React.Component {
  render() {
    return <div>angusss</div>
  }
}

window.addEventListener("DOMContentLoaded", event => {
  ReactDOM.render(<Root />, document.getElementById("root"))
})
