import React, { useState, useRef, useEffect } from "react"
import { createRoot } from 'react-dom/client'
import Intro from "./js/intro"
import List from "./js/list"
import Video from "./js/video"

const kNumCopies = 3;

function InfiniteScroller(props) {
  const [elementHeight, setElementHeight] = useState(props.childHeight * window.innerWidth)
  const resizeHandler = (_) => {
    setElementHeight(props.childHeight * window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    return _ => window.removeEventListener('resize', resizeHandler)
  }, [])

  // Euclidean modulo
  const offset = ((props.scroll % elementHeight) + elementHeight) % elementHeight

  let children: any[] = []
  for (let i = 0; i < kNumCopies; i++) {
    children.push(
      <div
        key={`child${i}`}
        style={{
          position: "absolute",
          top: `${elementHeight * i - offset}px`,
        }}>
        {props.children}
      </div>
    )
  }

  return (
    <div>
      <div
        style={{
          position: "relative",
          boxSizing: "content-box",
        }}>
        {children}
      </div>
    </div>
  )
}

function Root() {
  const [videoURL, setVideoURL] = useState("")
  const [scrollOffset, setScrollOffset] = useState(0)

  const requestNewVideoURL = (video) => {
    setVideoURL(video)
  }

  const stateRef = useRef();
  stateRef.scrollOffset = scrollOffset

  const mousewheelHandler = (e) => {
    setScrollOffset(stateRef.scrollOffset + e.deltaY)
  }

  useEffect(() => {
    window.addEventListener('wheel', mousewheelHandler)
    return _ => window.removeEventListener('wheel', mousewheelHandler)
  }, [])

  return (
    <div className="main">
      <Video videoURL={videoURL} />
      <div className="main-grid">
        <InfiniteScroller scroll={scrollOffset} childHeight={0.82}>
          <Intro />
        </InfiniteScroller>
        <InfiniteScroller scroll={-scrollOffset} childHeight={0.68}>
          <List setVideoURL={requestNewVideoURL} />
        </InfiniteScroller>
      </div>
    </div>
  )
}

window.addEventListener("DOMContentLoaded", event => {
  createRoot(document.getElementById("root")).render(<Root />)
})
