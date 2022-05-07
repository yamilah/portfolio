import * as React from "react"
import {Link} from "react-router-dom"
import imgOne from "../../images/home-case-one-line-1.svg"
import imgThree from "../../images/home-case-one-line-3.svg"
import imgFour from "../../images/home-case-one-line-4.svg"

export default class HomeCaseOne extends React.Component {
  render() {
    return (
      <section className="home-case-one">
        <img
          alt="A decorative line"
          className="home-case-one-line-1"
          src={imgOne}
        />
        <img
          alt="A decorative line"
          className="home-case-one-line-2"
          src={imgFour}
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
        <div className="home-case-one-text-wrapper">
          <p className="home-case-one-text-paragraph">
            <span className="home-case-one-text-1">
              social
            </span>
            <span className="home-case-one-text-2">
              media
            </span>
            <span className="home-case-one-text-3">
              &
            </span>
          </p>
          <p className="home-case-one-text-paragraph">
            <span className="home-case-one-text-4">
              video
            </span>
            <span className="home-case-one-text-5">
              chatting
            </span>
          </p>
        </div>
        <Link
          className="home-case-one-link"
          to="/houseparty"
        >
          <img
            alt="A decorative image link that reads: Check it out"
            className="home-case-one-line-3"
            src={imgThree}
          />
        </Link>
      </section>
    )
  }
}
