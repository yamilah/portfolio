import React, { useState, useRef, useEffect } from "react"
import { createRoot } from 'react-dom/client'
import Intro from "./js/intro"
import List from "./js/list"
import Video from "./js/video"

const kNumCopies = 3;

function InfiniteScroller(props) {
  const childRef = useRef()
  const [elementHeight, setElementHeight] = useState(1000)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const resizeHandler = (_) => {
    setWindowHeight(window.innerHeight)
    updateElementHeight()
  }

  const updateElementHeight = () => {
    if (!childRef.current && childRef.current.children.length > 0) {
      return
    }
    const child = childRef.current.children[0]
    setElementHeight(child.offsetHeight)
  }

  useEffect(() => {
    if (childRef.current) {
      updateElementHeight()
    }
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
        ref={childRef}
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
        <InfiniteScroller scroll={scrollOffset}>
          <Intro />
        </InfiniteScroller>
        <InfiniteScroller scroll={-scrollOffset}>
          <List setVideoURL={requestNewVideoURL} />
        </InfiniteScroller>
      </div>
    </div>
  )
}

window.addEventListener("DOMContentLoaded", event => {
  createRoot(document.getElementById("root")).render(<Root />)
})
