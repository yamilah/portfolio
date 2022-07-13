import * as React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import Home from "./js/pages/home"
import CaseOne from "./js/pages/case-one"
import CaseTwo from "./js/pages/case-two"
import Nav from "./js/components/nav"
import ScrollToTop from "./js/scripts/scrollToTop"
import Socials from "./js/components/socials"

class Root extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/houseparty" element={<CaseOne />}></Route>
          <Route path="/hofr" element={<CaseTwo />}></Route>
        </Routes>
      </Router>
    )
  }
}

window.addEventListener("DOMContentLoaded", event => {
  createRoot(document.getElementById("root")).render(<Root />)
})
