import * as React from "react"
import * as ReactDOM from "react-dom"
import {BrowserRouter as Router, Route} from "react-router-dom"
import About from "./components/pages/about"
import Main from "./components/pages/main"
import Nav from "./components/nav"
import Socials from "./components/socials"

class Root extends React.Component {
  render() {
    return <Router>
      <Nav />
      <Socials />
      <Route exact={true} path="/" component={Main}></Route>
      <Route exact={true} path="/about" component={About}></Route>
    </Router>
  }
}

window.addEventListener("DOMContentLoaded", event => {
  ReactDOM.render(<Root />, document.getElementById("root"))
})
