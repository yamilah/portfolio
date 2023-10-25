import * as React from "react"

export default class Intro extends React.Component {
  render() {
    return (
      <section className="intro">
        <p className="intro-line-1">
          To whom it may concern:
        </p>
        <div className="intro-name-wrapper">
          <p className="intro-name-1">
            ???
          </p>
          <h1 className="intro-name-2">
            Yamilah
          </h1>
        </div>
        <div className="intro-nickname">
          <p className="intro-nickname-1">
            AKA "Yam"
          </p>
          <p className="intro-nickname-2">
            (Nickname OK)
          </p>
        </div>
        <h1 className="intro-place">
          California
        </h1>
        <div className="intro-chachara-wrapper">
          <p>
            #
            <span>
              305
            </span>
          </p>
          <p>
            :)
          </p>
          <p>
            HEY
          </p>
        </div>
      </section>
    )
  }
}
