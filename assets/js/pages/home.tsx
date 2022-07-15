import * as React from "react"
import imgOne from "../../images/home/gradient.png"
import imgTwo from "../../images/home/line-2.svg"
import imgThree from "../../images/home/line-3.svg"
import imgFour from "../../images/home/drawing-1.svg"
import imgFive from "../../images/home/drawing-2.svg"
import imgSix from "../../images/home/drawing-3.svg"
import imgSeven from "../../images/home/drawing-4.svg"
import imgEight from "../../images/home/drawing-5.svg"
import imgNine from "../../images/home/drawing-6.svg"
import imgTen from "../../images/home/drawing-7.svg"

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <section className="home-intro">
          <div className="home-intro-top">
            <p className="home-intro-top-text">
              It's pronounced jah mee lah btw
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
            <img
              alt="A decorative line"
              className="home-intro-center-line"
              src={imgOne}
            />
            <img
              alt="A decorative line"
              className="home-intro-center-drawing-2"
              src={imgTen}
            />
            <img
              alt="A decorative image"
              className="home-intro-center-drawing-1"
              src={imgFour}
            />
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
            src={imgTwo}
          />
          <img
            alt="A decorative image"
            className="home-work-drawing-1"
            src={imgFive}
          />
          <img
            alt="A decorative image"
            className="home-work-drawing-2"
            src={imgSix}
          />
          <img
            alt="A decorative image"
            className="home-work-drawing-3"
            src={imgSeven}
          />
          <p className="home-work-text">
            Currently working on <a href="https://blog.twitter.com/en_us/topics/company/2021/introducing-twitter-blue" target="_blank" className="home-work-text-link">Twitter Blue↗</a>. I also worked as the only designer on Twitter’s Professional Publishers, a team that builds tailored features for enterprise customers. Before that, I worked on Twitter Communities, a feature that brings “groups” to Twitter.
          </p>
          <img
            alt="A decorative line"
            className="home-work-line-2"
            src={imgThree}
          />
        </section>
        <section className="home-contact">
          <p className="home-contact-marquee">It's pronounced jah mee lah btw</p>
          <img
            alt="A decorative image"
            className="home-contact-drawing-1"
            src={imgEight}
          />
          <img
            alt="A decorative image"
            className="home-contact-drawing-2"
            src={imgNine}
          />
          <div className="home-contact-links">
            <a
              className="home-contact-link-1"
              href="https://www.linkedin.com/in/yamilah/"
              target="_blank"
            >
              linkedin↗
            </a>
            <a
              className="home-contact-link-2"
              href="https://www.dribbble.com/yamilah"
              target="_blank"
            >
              dribbble↗
            </a>
            <a
              className="home-contact-link-3"
              href="https://www.github.com/yamilah"
              target="_blank"
            >
              github↗
            </a>
            <a
              className="home-contact-link-4"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hello@yamilah.com"
              target="_blank"
            >
              mail↗
            </a>
          </div>
        </section>
      </div>
    )
  }
}
