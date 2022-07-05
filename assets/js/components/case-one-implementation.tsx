import * as React from "react"
import imgFour from "../../images/houseparty/houseparty-snippet.jpg"
import imgOne from "../../images/houseparty/houseparty-device-1.jpg"
import imgThree from "../../images/houseparty/houseparty-focus.jpg"
import imgTwo from "../../images/houseparty/houseparty-device-2.jpg"
import vidOne from "url:../../images/houseparty/houseparty-performance-1.mp4"
import vidOneFallback from "url:../../images/houseparty/houseparty-performance-1.webm"
import vidOnePoster from "../../images/houseparty/houseparty-performance-poster-1.jpg"
import vidTwo from "url:../../images/houseparty/houseparty-performance-2.mp4"
import vidTwoFallback from "url:../../images/houseparty/houseparty-performance-2.webm"
import vidTwoPoster from "../../images/houseparty/houseparty-performance-poster-2.jpg"

export default class CaseOneImplementation extends React.Component {
  render() {
    return (
      <section className="case-one-implementation">
        <h1 className="case-one-implementation-heading">
          How did this get built?
        </h1>
        <p className="case-one-implementation-text">
          Well, it didn't quite unfold like a dream, actually. There were a number of gotchas—users saw this one, and so did we: issues with responsiveness and performance with respect to video reordering—there were a few reasons for this, but a big one was that we were JavaScript heavily to handle all that. What you’re seeing here are some actual prototypes I made with Invision Studio to explore these pain points around timing, ordering, responsiveness—and all of this at different screen sizes and orientations.
        </p>
        <div className="case-one-implementation-prototypes">
          <video
            autoPlay
            className="case-one-implementation-video case-one-implementation-prototype-1"
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
          <video
            autoPlay
            className="case-one-implementation-video case-one-implementation-prototype-2"
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
        </div>
        <p className="case-one-implementation-text">
          This is because Chromebooks, our target OS and devices, have dramatic differences in their performance levels and screen sizes, and gyroscope support (landscape v. portrait). Okay, so I took this on, which made sense since it lives in design and dev world.
        </p>
        <div className="case-one-implementation-devices">
          <img
            alt="A small Chromebook"
            className="case-one-implementation-img case-one-implementation-device-1"
            src={imgOne}
          />
          <img
            alt="A luxury Chromebook"
            className="case-one-implementation-img case-one-implementation-device-2"
            src={imgTwo}
          />
        </div>
        <p className="case-one-implementation-text">
          And here was how I did that: from the beginning, we agreed we wouldn’t support browsers like Internet Explorer, which is why you’re seeing the screen I designed that lets you know about that. But the upshot to this choice is focus: I could leverage cutting edge browser standards, such as CSS Grid, which wasn’t available on Internet Explorer.
        </p>
        <img
          alt="An error page showing that this app can only be used on Chrome"
          className="case-one-implementation-img"
          src={imgThree}
        />
        <p className="case-one-implementation-text">
          At the time, this was a risky choice, but a good one. Going CSS heavy instead of JS meant that we got responsiveness and performance improvements basically for free. Which added polish but, maybe more importantly, it closed that feedback loop users were struggling with, making it way easier to see everyone while chatting, quickly see who was coming in and out, so immersion in the chatting experience was way better.
        </p>
        <img
          alt="A verbose code snippet"
          className="case-one-implementation-img"
          src={imgFour}
        />
      </section>
    )
  }
}
