import * as React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import Home from "./js/pages/home"
import CaseOne from "./js/pages/case-one"

class Root extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/houseparty" element={<CaseOne />}></Route>
        </Routes>
      </Router>
    )
  }
}

window.addEventListener("DOMContentLoaded", event => {
  createRoot(document.getElementById("root")).render(<Root />)
})
