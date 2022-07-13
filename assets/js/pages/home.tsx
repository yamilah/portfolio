import * as React from "react"
import {Link} from "react-router-dom"
import imgOne from "../../images/home/line-2.svg"
import imgTwo from "../../images/home/line-3.svg"

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <section className="home-intro">
          <div className="home-intro-top">
            <p className="home-intro-top-text">
              It’s prounounced jah mee lah btw
            </p>
            <a
              className="home-intro-top-text"
              href="https://bit.ly/atallah-cv"
              target="_blank"
            >
              CV↗
            </a>
          </div>
          <div className="home-intro-center">
            idk
          </div>
          <div className="home-intro-bottom">
            <p className="home-intro-bottom-text">
              I’m Yamilah, a designer & developer in California.
            </p>
            <p className="home-intro-bottom-text">
              I currently work on
              <a
                className="home-intro-bottom-link"
                href="https://blog.twitter.com/en_us/topics/company/2021/introducing-twitter-blue"
                target="_blank"
              >
                &nbsp;Twitter Blue↗
              </a>
              . But I’ve also worked on other products, like
              <a
                className="home-intro-bottom-link"
                href="https://www.abstract.com/2021-archive/notebooks"
                target="_blank"
              >
                &nbsp;Abstract↗
              </a>
              ,
              <a
                className="home-intro-bottom-link"
                href="https://disneyplus.com"
                target="_blank"
              >
                &nbsp;Disney+↗
              </a>
              ,
              <a
                className="home-intro-bottom-link"
                href="https://twitter.com/houseparty"
                target="_blank"
              >
                &nbsp;Houseparty↗
              </a>
               , and more.
            </p>
          </div>
        </section>
        <section className="home-work">
          <img
            alt="A decorative line"
            className="home-work-line-1"
            src={imgOne}
          />
          <p className="home-work-text">
            I worked as the only designer on Twitter’s Professional Publishers↗, a team that builds tailored features and experiences for our pro pubs (NYT, Buzzfeed, Disney, etc.). But I also worked on Twitter Communities↗, a feature that brings “group” functionality to Twitter (think Facebook Groups, or subreddits).
          </p>
          <img
            alt="A decorative line"
            className="home-work-line-2"
            src={imgTwo}
          />
        </section>
      </div>
    )
  }
}
