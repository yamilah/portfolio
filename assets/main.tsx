import React, { useState, useRef, useEffect } from "react"
import { createRoot } from 'react-dom/client'
import Intro from "./js/intro"
import List from "./js/list"
import Video from "./js/video"

const kNumCopies = 2;

function InfiniteScroller(props) {
  const childRef = useRef()
  const [initialHeight, setInitialHeight] = useState(1000)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const resizeHandler = (_) => {
    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    if (childRef.current) {
      setInitialHeight(childRef.current.getBoundingClientRect().height / kNumCopies)
    }
    window.addEventListener('resize', resizeHandler)
    return _ => window.removeEventListener('resize', resizeHandler)
  }, [])

  // Euclidean modulo
  const offset = ((props.scroll % initialHeight) + initialHeight) % initialHeight

  let children: any[] = []
  for (let i = 0; i < kNumCopies; i++) {
    children.push(props.children)
  }

  return (
    <div
      ref={childRef}
      style={{
        transform: `translateY(${-offset}px)`,
      }}>
      {children}
    </div>
  )
}

function Root() {
  const [videoURL, setVideoURL] = useState("")
  const [scrollOffset, setScrollOffset] = useState(0)

  const stateRef = useRef();
  stateRef.scrollOffset = scrollOffset

  const mousewheelHandler = (e) => {
    setScrollOffset(stateRef.scrollOffset + e.deltaY)
  }

  useEffect(() => {
    window.addEventListener('mousewheel', mousewheelHandler)
    return _ => window.removeEventListener('mousewheel', mousewheelHandler)
  }, [])

  return (
    <div className="main">
      <Video className="video" videoURL={videoURL} />
      <div className="main-grid">
        <InfiniteScroller scroll={-scrollOffset}>
          <Intro />
        </InfiniteScroller>
        <InfiniteScroller scroll={scrollOffset}>
          <List setVideoURL={setVideoURL} />
        </InfiniteScroller>
      </div>
    </div>
  )
}

window.addEventListener("DOMContentLoaded", event => {
  createRoot(document.getElementById("root")).render(<Root />)
})
