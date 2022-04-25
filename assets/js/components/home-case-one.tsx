import * as React from "react"
import imgOne from "../../images/home-case-one-line-1.svg"

export default class HomeCaseOne extends React.Component {
  render() {
    return (
      <div className="home-case-one">
        <img
          alt="A decorative line"
          className="home-case-one-line-1"
          src={imgOne}
        />
        <h1 className="home-case-one-heading-1">
          hous
          <span className="home-case-one-heading-1-detail">
            e
          </span>
        </h1>
        <h1 className="home-case-one-heading-2">
          part
          <span className="home-case-one-heading-2-detail">
            y
          </span>
        </h1>
        <div className="home-case-one-text">
          <p>
            <span>
              social
            </span>
            <span>
              media
            </span>
            <span>
              &
            </span>
          </p>
          <p>
            video chatting
          </p>
        </div>
        <a href="" className="home-case-one-link">
          <span className="home-case-one-link-text-1">
            Check
          </span>
          <span className="home-case-one-link-text-2">
            it out
          </span>
          <span className="home-case-one-link-text-3">
            ↗
          </span>
        </a>
      </div>
    )
  }
}
