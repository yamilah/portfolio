import * as React from "react"
import vidOne from "../images/houseparty/houseparty-prototype.mp4"
import vidOneFallback from "../images/houseparty/houseparty-prototype.webm"
import vidOnePoster from "../images/houseparty/houseparty-prototype-poster.jpg"
import vidTwo from "../images/houseparty/houseparty-progress.mp4"
import vidTwoFallback from "../images/houseparty/houseparty-progress.webm"
import vidTwoPoster from "../images/houseparty/houseparty-progress-poster.jpg"

export default class DetailOneImplementation extends React.Component {
  render() {
    return (
      <section className="detail-one-implementation">
        <div className="detail-one-implementation-separator">
          <p className="detail-one-implementation-separator-number">
            02
          </p>
          <p className="detail-one-implementation-separator-text">
            Iterations & Implementation
          </p>
        </div>
        <div className="detail-one-implementation-prototype">
          <video
            autoPlay
            className="detail-one-implementation-prototype-video dropshadow"
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
          </video>
          <p className="detail-one-implementation-prototype-text">
            From this work over that week, I was able to lead the conversation to the ultimate goal of the week: a prototype to test against users, an excerpt from which you’re seeing here. Here were some key findings from this testing:
          </p>
        </div>
        <div className="detail-one-implementation-figures">
          <figure className="detail-one-implementation-figure-1">
            <p className="detail-one-implementation-figure-number">
              3/5
            </p>
            <p className="detail-one-implementation-figure-text">
              participants could not figure out where notifications were
            </p>
          </figure>
          <figure className="detail-one-implementation-figure-2">
            <p className="detail-one-implementation-figure-number">
              5/5
            </p>
            <p className="detail-one-implementation-figure-text">
              participants could figure out how to start a chat
            </p>
          </figure>
          <figure className="detail-one-implementation-figure-3">
            <p className="detail-one-implementation-figure-number">
              4/5
            </p>
            <p className="detail-one-implementation-figure-text">
              participants could figure out how to add a friend
            </p>
          </figure>
          <figure className="detail-one-implementation-figure-4">
            <p className="detail-one-implementation-figure-number">
              5/5
            </p>
            <p className="detail-one-implementation-figure-text">
              participants understood the wave feature
            </p>
          </figure>
        </div>
        <div className="detail-one-implementation-progress">
          <video
            autoPlay
            className="detail-one-implementation-progress-video dropshadow"
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
          </video>
          <p className="detail-one-implementation-progress-text-1">
            With these results in mind, we felt good about the scope we selected for our MVP and got started. Being the sole designer, I focused on bringing the agreed upon feature set from sketches, to lofi prototypes, testing those with users, and bringing them to hifi.
          </p>
          <p className="detail-one-implementation-progress-text-2">
            While doing this, I was also implementing designs and components on the front-end in storybook, and then having devs pick up those storybook components up, hooking those up to data from Houseparty’s API. I certainly had my hands full! We all did.
          </p>
        </div>
      </section>
    )
  }
}
