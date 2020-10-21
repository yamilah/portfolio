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
        <div className="detail-one-implementation-prototype">
          <video
            autoPlay
            className="detail-one-implementation-prototype-video-1 dropshadow"
            loop
            muted
            poster={vidOnePoster}
          >
            <source
              src={vidOne}
              type="video/mp4"
            />
            Sorry, but your browser doesn't support HTML5 videos. Try on another!
          </video>
          <video
            autoPlay
            className="detail-one-implementation-prototype-video-2 dropshadow"
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
          <p className="detail-one-implementation-prototype-text-1">
            We were all moving really quickly, so we didn't expect what we learned next: users struggled a ton with prototype issues that came with all the video reordering—this was because we were using JavaScript heavily to handle all that.
          </p>
          <p className="detail-one-implementation-prototype-text-2">
            What you’re seeing here are some actual prototypes I made to explore these pain points around timing, ordering, responsiveness—and all of this at different screen sizes and orientations.
          </p>
        </div>
      </section>
    )
  }
}
