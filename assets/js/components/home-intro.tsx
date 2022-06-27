import * as React from "react"
import imgOne from "../../images/home-intro-line-1.svg"
import imgTwo from "../../images/home-intro-line-3.svg"

export default class HomeIntro extends React.Component {
  render() {
    return (
      <section className="home-intro">
        <h1 className="home-intro-heading-1">
          yam
        </h1>
        <h1 className="home-intro-heading-2">
          —il
        </h1>
        <h1 className="home-intro-heading-3">
          ah
        </h1>
        <img
          alt="A decorative line"
          className="home-intro-line-1"
          src={imgOne}
        />
        <div className="home-intro-line-2-wrapper">
          <img
            alt="A decorative line"
            className="home-intro-line-2"
            src={imgTwo}
          />
          <p className="home-intro-line-2-text-wrapper">
            <span className="home-intro-line-2-text-1">
              <span className="home-intro-line-character-1">
                des
              </span>
              <span className="home-intro-line-character-2">
                i
              </span>
              <span className="home-intro-line-character-3">
                gn
              </span>
              <span className="home-intro-line-character-4">
                e
              </span>
              <span className="home-intro-line-character-5">
                r
              </span>
            </span>
            <span className="home-intro-line-2-text-2">
              &
            </span>
            <span className="home-intro-line-2-text-3">
              developer
            </span>
          </p>
        </div>
      </section>
    )
  }
}
