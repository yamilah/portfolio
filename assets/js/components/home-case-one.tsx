import * as React from "react"
import imgOne from "../../images/home-case-one-line-1.svg"
import imgThree from "../../images/home-case-one-line-3.svg"

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
            <span>
              video
            </span>
            <span>
              chatting
            </span>
          </p>
        </div>
        <a href="" className="home-case-one-link">
          <img
            alt="A decorative image link that reads: Check it out"
            className="home-case-one-line-3"
            src={imgThree}
          />
        </a>
      </div>
    )
  }
}
