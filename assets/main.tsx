import React, { useState } from "react"
import { createRoot } from 'react-dom/client'
import Intro from "./js/intro"
import List from "./js/list"
import Video from "./js/video"

function Root() {
  const [videoURL, setVideoURL] = useState("")

  return (
    <div className="main">
      <Video className="video" videoURL={videoURL} />
      <div className="main-grid">
        <Intro />
        <List setVideoURL={setVideoURL} />
      </div>
    </div>
  )
}

window.addEventListener("DOMContentLoaded", event => {
  createRoot(document.getElementById("root")).render(<Root />)
})
