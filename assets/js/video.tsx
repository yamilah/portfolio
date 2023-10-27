import React, { useEffect, useState } from "react"

const kTransitionTime = 300 // milliseconds
const kActivationDelay = 300 // milliseconds

enum VideoState {
  off,
  activationDelay,
  turningOn,
  on,
  turningOff,
}

export default function Video({ videoURL }) {
  const [transitionEnabled, setTransitionEnabled] = useState(false)
  const [videoState, setVideoState] = useState(VideoState.off)
  const [displayedVideoURL, setDisplayedVideoURL] = useState("")
  const [pendingVideoURL, setPendingVideoURL] = useState("")
  const [activationDelayID, setActivationDelayID] = useState(-1)

  const activateDelay = (activateURL) => {
    setVideoState(VideoState.activationDelay)
    setPendingVideoURL(activateURL);

    clearTimeout(activationDelayID)
    const timeoutID = setTimeout(() => {
      setVideoState(VideoState.turningOn)
      setDisplayedVideoURL(activateURL)
      setTimeout(() => {
        setTransitionEnabled(true)
        setTimeout(() => {
          setVideoState(VideoState.on)
        }, kTransitionTime)
      }, 50);
      setActivationDelayID(-1)
    }, kActivationDelay)
    setActivationDelayID(timeoutID);
  }

  if (pendingVideoURL !== videoURL) {
    setPendingVideoURL(videoURL);
    if (videoState === VideoState.activationDelay) {
      activateDelay(videoURL);
    }
  }

  if (videoState === VideoState.off && pendingVideoURL !== "") {
    activateDelay(pendingVideoURL)
  } else if (videoState === VideoState.on && displayedVideoURL !== pendingVideoURL) {
    setVideoState(videoState.turningOff)

    setTransitionEnabled(false)
    setVideoState(VideoState.activationDelay)

    setTimeout(() => {
      setVideoState(VideoState.off)
      setDisplayedVideoURL("")
    }, kTransitionTime)
  }

  return displayedVideoURL == "" ? null : <video
    className={`video ${transitionEnabled ? "video-done" : ""}`}
    src={displayedVideoURL}
    autoPlay
    muted
    loop
  />
}
