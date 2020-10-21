import * as React from "react"
import vidOne from "../images/houseparty/houseparty-performance-1.mp4"
import vidOnePoster from "../images/houseparty/houseparty-performance-poster-1.jpg"
import vidTwo from "../images/houseparty/houseparty-performance-2.mp4"
import vidTwoPoster from "../images/houseparty/houseparty-performance-poster-2.jpg"

export default class DetailOneImplementation extends React.Component {
  render() {
    return (
      <section className="detail-one-implementation">
        <div className="detail-one-implementation-separator">
          <p className="detail-one-implementation-separator-number">
            03
          </p>
          <p className="detail-one-implementation-separator-text">
            Implementation & shipping
          </p>
        </div>
        <div className="detail-one-implementation-performance">
          <video
            autoPlay
            className="detail-one-implementation-performance-video-1 dropshadow"
            loop
            muted
            >
            <source
              src={vidOne}
              type="video/mp4"
            />
            Sorry, but your browser doesn't support HTML5 videos. Try on another!
          </video>
          <video
            autoPlay
            className="detail-one-implementation-performance-video-2 dropshadow"
            loop
            muted
            poster={vidTwoPoster}
            >
            <source
              src={vidTwo}
              type="video/mp4"
            />
            Sorry, but your browser doesn't support HTML5 videos. Try on another!
          </video>
        </div>
      </section>
    )
  }
}
