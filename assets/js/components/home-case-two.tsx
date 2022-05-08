import * as React from "react"
import {Link} from "react-router-dom"
import imgOne from "../../images/home-case-two-line-1.svg"
import imgTwo from "../../images/home-case-one-line-3.svg"

export default class HomeCaseTwo extends React.Component {
  render() {
    return (
      <section className="home-case-two">
        <img
          alt="A decorative line"
          className="home-case-two-line-1"
          src={imgOne}
        />
        <div className="home-case-two-headings">
          <h1 className="home-case-two-heading-1">
            <span className="home-case-two-heading-span-1">
              hall
            </span>
            <span className="home-case-two-heading-span-2">
              of
            </span>
          </h1>
          <h1 className="home-case-two-heading-2">
            famer
          </h1>
        </div>
        <div className="home-case-two-texts">
          <p className="home-case-two-text-1">
            <span>
              sports
            </span>
            <span>
              prediction
            </span>
          </p>
          <p className="home-case-two-text-2">
            <span>
              mobile
            </span>
            <span>
              game
            </span>
          </p>
        </div>
        <Link
          className="home-case-two-link"
          to="/hofr"
        >
          <img
            alt="A decorative image link that reads: Check it out"
            className="home-case-one-line-3"
            src={imgTwo}
          />
        </Link>
      </section>

    )
  }
}
