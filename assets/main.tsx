import React, { useState } from "react"
import { createRoot } from 'react-dom/client'
import Intro from "./js/intro"
import List from "./js/list"

function Root() {
  const [videoURL, setVideoURL] = useState("")

  return (
    <div className="main">
      <Intro videoURL={videoURL} />
      <List setVideoURL={setVideoURL} />
    </div>
  )
}

window.addEventListener("DOMContentLoaded", event => {
  createRoot(document.getElementById("root")).render(<Root />)
})
