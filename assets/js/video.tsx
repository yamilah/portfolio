import React from "react"

export default function Intro(props) {
  return props.videoURL == "" ? null : <video
    className="video"
    src={props.videoURL}
    autoPlay
    muted
    loop
  />
}
