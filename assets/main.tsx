import * as React from "react"
import { createRoot } from 'react-dom/client'
import Intro from "./js/intro"
import List from "./js/list"

class Root extends React.Component {
  render() {
    return (
      <section className="main">
        <Intro />
        <List />
      </section>
    )
  }
}

window.addEventListener("DOMContentLoaded", event => {
  createRoot(document.getElementById("root")).render(<Root />)
})
