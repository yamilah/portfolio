import * as React from "react"

export default class HomeLIntro extends React.Component {
  render() {
    return (
      <div className="home-intro">
        <h1 className="home-intro-first">
          Yamilah
        </h1>
        <h2 className="home-intro-last">
          Atallah
        </h2>
        <p className="home-intro-phonetic">
          <span className="home-intro-phonetic-1">
            jah
          </span>
          <span className="home-intro-phonetic-2">
            mee
          </span>
          <span className="home-intro-phonetic-3">
            lah
          </span>
        </p>
        <p className="home-intro-text">
          Hi! I’m a designer and front-end developer based in the Bay Area. Currently, I’m working at a certain social media company.
        </p>
      </div>
    )
  }
}
