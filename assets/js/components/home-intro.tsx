import * as React from "react"
import imgOne from "../../images/home-intro-line-1.svg"
import imgTwo from "../../images/home-intro-line-3.svg"
import imgThree from "../../images/home-intro-line-4.svg"

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
          <div className="home-intro-line-2-text-wrapper">
            <p className="home-intro-line-2-text-1">
              <span className="home-intro-line-2-character-1">
                des
              </span>
              <span className="home-intro-line-2-character-2">
                i
              </span>
              <span className="home-intro-line-2-character-3">
                gn
              </span>
              <span className="home-intro-line-2-character-4">
                e
              </span>
              <span className="home-intro-line-2-character-5">
                r
              </span>
              <span className="home-intro-line-2-character-6">
                &
              </span>
            </p>
            <p className="home-intro-line-2-text-2">
              <span className="home-intro-line-2-character-7">
                d
              </span>
              <span className="home-intro-line-2-character-8">
                ev
              </span>
              <span className="home-intro-line-2-character-9">
                elo
              </span>
              <span className="home-intro-line-2-character-10">
                per
              </span>
            </p>
          </div>
        </div>
        <div className="home-intro-line-3-wrapper">
          <img
              alt="A decorative line"
              className="home-intro-line-3"
              src={imgThree}
            />
          <p className="home-intro-line-3-text-wrapper">
            <span className="home-intro-line-3-text-1">
              <span className="home-intro-line-3-character-1">
                bas
              </span>
              <span className="home-intro-line-3-character-2">
                e
              </span>
              <span className="home-intro-line-3-character-3">
                d
              </span>
              <span className="home-intro-line-3-character-4">
                i
              </span>
              <span className="home-intro-line-3-character-5">
                n
              </span>
            </span>
            <span className="home-intro-line-3-text-2">
              <span className="home-intro-line-3-character-6">
                c
              </span>
              <span className="home-intro-line-3-character-7">
                a
              </span>
              <span className="home-intro-line-3-character-8">
                l
              </span>
              <span className="home-intro-line-3-character-9">
                i
              </span>
              <span className="home-intro-line-3-character-10">
                for
              </span>
              <span className="home-intro-line-3-character-11">
                ni
              </span>
              <span className="home-intro-line-3-character-12">
                a
              </span>
            </span>
          </p>
        </div>
      </section>
    )
  }
}
