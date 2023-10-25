import * as React from "react"

export default class Intro extends React.Component {
  render() {
    return (
      <section className="intro">
        <p className="intro-line-1">
          To whom it may concern:
        </p>
        <div className="intro-name-wrapper">
          <p className="intro-name-wrapper-1">
            ???
          </p>
          <h1 className="intro-name-wrapper-2">
            Yamilah
          </h1>
        </div>
        <div className="intro-nickname">
          <p>
            AKA "Yam"
          </p>
          <p>
            (Nickname OK)
          </p>
        </div>
        <h1>
          California
        </h1>
      </section>
    )
  }
}
