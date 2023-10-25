import * as React from "react"
import { createRoot } from 'react-dom/client'

class Root extends React.Component {
  render() {
    return (
      <section>
        <p>
          To whom it may concern:
        </p>
        <div>
          <p>
            ???
          </p>
          <h1>
            Yamilah
          </h1>
        </div>
        <span>
          <p>
            AKA "Yam"
          </p>
          <p>
            (Nickname OK)
          </p>
        </span>
      </section>
    )
  }
}

window.addEventListener("DOMContentLoaded", event => {
  createRoot(document.getElementById("root")).render(<Root />)
})
