import * as React from "react"
import imgOne from "../images/home-left-pronunciation-drawing.svg"

export default class HomeLeftPronunciation extends React.Component {
  render() {
    return (
      <div className="home-left-pronunciation">
        <img
          alt="A decorative line"
          className="home-left-pronunciation-line"
          src={imgOne}
        />
        <div className="home-left-pronunciation-content-1">
          <h1 className="home-left-pronunciation-heading-1">
            pro-
          </h1>
          <h1 className="home-left-pronunciation-heading-2">
            nun-
          </h1>
          <h1 className="home-left-pronunciation-heading-3">
            ciation
          </h1>
        </div>
      </div>
    )
  }
}