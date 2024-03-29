import * as React from "react"
import imgOne from "../images/houseparty/houseparty-idea-1.jpg"
import imgTwo from "../images/houseparty/houseparty-idea-2.jpg"
import imgThree from "../images/houseparty/houseparty-idea-3.jpg"
import imgFour from "../images/houseparty/houseparty-idea-4.jpg"
import imgFive from "../images/houseparty/houseparty-idea-5.jpg"
import vidOne from "../images/houseparty/houseparty-prototype.mp4"
import vidOneFallback from "../images/houseparty/houseparty-prototype.webm"
import vidOnePoster from "../images/houseparty/houseparty-prototype-poster.jpg"
import vidTwo from "../images/houseparty/houseparty-progress.mp4"
import vidTwoFallback from "../images/houseparty/houseparty-progress.webm"
import vidTwoPoster from "../images/houseparty/houseparty-progress-poster.jpg"

export default class DetailOneIteration extends React.Component {
  render() {
    return (
      <section className="detail-one-iteration">
        <div className="detail-one-iteration-separator">
          <p className="detail-one-iteration-separator-number">
            02
          </p>
          <p className="detail-one-iteration-separator-text">
            Iterations & testing
          </p>
        </div>
        <div className="detail-one-iteration-prototype">
          <video
            autoPlay
            className="detail-one-iteration-prototype-video dropshadow"
            loop
            muted
            poster={vidOnePoster}
          >
            <source
              src={vidOne}
              type="video/mp4"
            />
            <source
              src={vidOneFallback}
              type="video/webm"
            />
            Sorry, but your browser doesn't support HTML5 videos. Try on another!
          </video>
          <p className="detail-one-iteration-prototype-text">
            From this work over that week, I was able to lead the conversation to the ultimate goal of the week: a prototype to test against users, an excerpt from which you’re seeing above. Here were some key findings from this testing:
          </p>
        </div>
        <div className="detail-one-iteration-figures">
          <figure className="detail-one-iteration-figure-1">
            <p className="detail-one-iteration-figure-number">
              3/5
            </p>
            <p className="detail-one-iteration-figure-text">
              participants could not figure out where notifications were
            </p>
          </figure>
          <figure className="detail-one-iteration-figure-2">
            <p className="detail-one-iteration-figure-number">
              5/5
            </p>
            <p className="detail-one-iteration-figure-text">
              participants could figure out how to start a chat
            </p>
          </figure>
          <figure className="detail-one-iteration-figure-3">
            <p className="detail-one-iteration-figure-number">
              4/5
            </p>
            <p className="detail-one-iteration-figure-text">
              participants could figure out how to add a friend
            </p>
          </figure>
          <figure className="detail-one-iteration-figure-4">
            <p className="detail-one-iteration-figure-number">
              5/5
            </p>
            <p className="detail-one-iteration-figure-text">
              participants understood the wave feature
            </p>
          </figure>
        </div>
        <div className="detail-one-iteration-progress">
          <video
            autoPlay
            className="detail-one-iteration-progress-video dropshadow"
            loop
            muted
            poster={vidTwoPoster}
          >
            <source
              src={vidTwo}
              type="video/mp4"
            />
            <source
              src={vidTwoFallback}
              type="video/webm"
            />
            Sorry, but your browser doesn't support HTML5 videos. Try on another!
          </video>
          <p className="detail-one-iteration-progress-text-1">
            With these results in mind, we felt good about the scope we selected for our MVP and got started. Being the sole designer, I focused on bringing the agreed upon feature set from sketches, to lofi prototypes, testing those with users, and bringing them to hifi—which is what you’re seeing here.
          </p>
          <p className="detail-one-iteration-progress-text-2">
            While doing this, I was also implementing designs and components on the front-end in storybook, and then having devs pick up those storybook components up, hooking those up to data from Houseparty’s API. I certainly had my hands full! We all did.
          </p>
        </div>
        <div className="detail-one-iteration-ideas">
          <img
            alt="A product concept drawing"
            className="detail-one-iteration-idea-1 dropshadow"
            src={imgFive}
          />
          <img
            alt="A product concept drawing"
            className="detail-one-iteration-idea-2 dropshadow"
            src={imgFour}
          />
          <img
            alt="A product concept drawing"
            className="detail-one-iteration-idea-3 dropshadow"
            src={imgThree}
          />
          <img
            alt="A product concept drawing"
            className="detail-one-iteration-idea-4 dropshadow"
            src={imgTwo}
          />
          <img
            alt="A product concept drawing"
            className="detail-one-iteration-idea-5 dropshadow"
            src={imgOne}
          />
          <p className="detail-one-iteration-idea-text">
            As it happens, what you see on production, <a href="https://app.houseparty.com">app.houseparty.com</a>, is really just a small slice of the many iterations of designs I put together and tried out. I felt like we really did our due diligence when working on where to put all the controls and interactions. What you’re seeing here are some examples that we looked into.
          </p>
        </div>
      </section>
    )
  }
}
