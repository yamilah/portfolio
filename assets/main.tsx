import * as React from "react"
import * as ReactDOM from "react-dom"
import {BrowserRouter as Router, Route} from "react-router-dom"
import ScrollMemory from 'react-router-scroll-memory';
import About from "./components/pages/about"
import CaseDetailOne from "./components/pages/case-detail-one"
import CaseDetailTwo from "./components/pages/case-detail-two"
import Main from "./components/pages/main"
import Nav from "./components/nav"
import Socials from "./components/socials"

class Root extends React.Component {
  render() {
    return <Router>
      <ScrollMemory />
      <Nav />
      <Socials />
      <Route exact={true} path="/" component={Main}></Route>
      <Route exact={true} path="/about" component={About}></Route>
      <Route exact={true} path="/houseparty" component={CaseDetailOne}></Route>
      <Route exact={true} path="/hofr" component={CaseDetailTwo}></Route>
    </Router>
  }
}

window.addEventListener("DOMContentLoaded", event => {
  ReactDOM.render(<Root />, document.getElementById("root"))
})
