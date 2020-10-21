import * as React from "react"
import imgOne from "../images/houseparty/houseparty-device-1.jpg"
import imgTwo from "../images/houseparty/houseparty-device-2.jpg"
import imgThree from "../images/houseparty/houseparty-focus.jpg"
import imgFour from "../images/houseparty/houseparty-snippet.jpg"
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
        <div className="detail-one-implementation-devices">
          <img
            alt="A small Chromebook"
            className="detail-one-implementation-device-1 dropshadow"
            src={imgOne}
          />
          <img
            alt="A luxury Chromebook"
            className="detail-one-implementation-device-2 dropshadow"
            src={imgTwo}
          />
          <p className="detail-one-implementation-device-text">
            It was important to considre this as, Chromebooks,—our target OS and device type—have dramatic differences in performance levels and screen sizes, gyroscope support (landscape and portrait), etc. Getting this feedback from our users about the chat latency and responsiveness, I took on the design and technical challenge of figuring out this very complex part of the product. And here’s how I did that:
          </p>
        </div>
        <div className="detail-one-implementation-focus">
          <img
            alt="An error page showing that this app can only be used on Chrome"
            className="detail-one-implementation-focus-img dropshadow"
            src={imgThree}
          />
          <p className="detail-one-implementation-focus-text-1">
            From the beginning, we agreed we wouldn’t support browsers like Internet Explorer, some messaging around this you’re seeing here. But the upshot to this choice is focus:
          </p>
          <p className="detail-one-implementation-focus-text-2">
            I could leverage cutting edge browser standards, such as CSS Grid, which wasn’t available on Internet Explorer.
          </p>
          <p className="detail-one-implementation-focus-text-3">
            This was much to the CTO’s chagrin, who felt very strongly that JavaScript should do the heavy lifting.
          </p>
        </div>
        <div className="detail-one-implementation-snippet">
          <img
            alt="A verbose code snippet"
            className="detail-one-implementation-snippet-img dropshadow"
            src={imgFour}
          />
          <p className="detail-one-implementation-snippet-text-1">
            But I have a different philosophy: I see styling as design and, when design doesn’t live in Figma, it should live in its web analog—CSS.
          </p>
          <p className="detail-one-implementation-snippet-text-2">
            Risky choice but, luckily, one that panned out; it enabled an experience that was responsive, performant, way more maintainable, contrasted to the JavaScript route.
          </p>
          <p className="detail-one-implementation-snippet-text-3">
            These buttery-smooth transitions added polish but, more importantly, they closed that feedback loop users were struggling with, making it way easier to see everyone while chatting—we received feedback that immersion was way improved.
          </p>
        </div>
      </section>
    )
  }
}
