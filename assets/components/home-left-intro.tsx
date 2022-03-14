import * as React from "react"
import imgOne from "../images/home-left-intro-drawing.svg"

export default class HomeLeftIntro extends React.Component {
  render() {
    return (
      <div className="home-left-intro">
        <img
          alt="A decorative line"
          className="home-left-intro-line"
          src={imgOne}
        />
        <div className="home-left-intro-content">
          <h1 className="home-left-intro-first">
            Yamilah
          </h1>
          <h2 className="home-left-intro-last">
            Atallah
          </h2>
          <p className="home-left-intro-phonetic">
            <span className="home-left-intro-phonetic-1">
              jah
            </span>
            <span className="home-left-intro-phonetic-2">
              mee
            </span>
            <span className="home-left-intro-phonetic-3">
              lah
            </span>
          </p>
          <p className="home-left-intro-text">
            Hi! I’m a designer and front-end developer based in the Bay Area. Currently, I’m working at a certain social media company.
          </p>
        </div>
      </div>
    )
  }
}