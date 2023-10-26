import React from "react"
import Smile from "../images/Smile.svg"
import Star from "../images/Star.svg"

export default function Intro() {
  return (
    <section className="intro">
      <p className="intro-a">
        To whom it may concern:
      </p>
      <div className="intro-b">
        <p className="intro-b-text">
          ???
        </p>
      </div>
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
      <p className="intro-n">
        Prev.
      </p>
      <h1 className="intro-p">
        Twitter
      </h1>
      <footer className="intro-o">
        <a href="https://bit.ly/atallah-cv" target="_blank">
          Resume↗
        </a>
        <a href="https://linkedin.com/in/yamilah" target="_blank">
          LinkedIn↗
        </a>
        <a href="https://dribbble.com/yamilah" target="_blank">
          Dribbble↗
        </a>
      </footer>
    </section>
  )
}
