import * as React from "react"
import vidOne from "../images/houseparty/houseparty-prototype.mp4"

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
          >
            <source
              src={vidOne}
              type="video/mp4"
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
      </section>
    )
  }
}
