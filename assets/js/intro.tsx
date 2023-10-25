import * as React from "react"
import Smile from "../images/Smile.svg"
import Star from "../images/Star.svg"

export default class Intro extends React.Component {
  render() {
    return (
      <section className="intro">
        <p className="intro-a">
          To whom it may concern:
        </p>
        <p className="intro-b">
          <p className="intro-b-text">
            ???
          </p>
        </p>
        <h1 className="intro-c">
          Yamilah
        </h1>
        <p className="intro-d">
          AKA "Yam"
        </p>
        <p className="intro-e">
          (Nickname OK)
        </p>
        <h1 className="intro-f">
          California
        </h1>
        <p className="intro-g">
          <span className="intro-g-sharp">
            #
          </span>
          305
        </p>
        <img
          className="intro-h"
          src={Smile}
        />
        <p className="intro-i">
          ME
        </p>
        <img
          className="intro-j"
          src={Star}
        />
        <p className="intro-k">
          PD & Dev
        </p>
        <h1 className="intro-l">
          Insta
          <span className="intro-l-gram">
            gram
          </span>
        </h1>
        <p className="intro-m">
          “X”
        </p>
        <p className="intro-n">
          Prev.
        </p>
        <p className="intro-o">
          1.0
        </p>
        <h1 className="intro-p">
          Twitter
        </h1>
      </section>
    )
  }
}