import * as React from "react"
import vidOne from "url:../../images/houseparty/houseparty-prototype.mp4"
import vidOneFallback from "url:../../images/houseparty/houseparty-prototype.webm"
import vidOnePoster from "../../images/houseparty/houseparty-prototype-poster.jpg"
import vidTwo from "url:../../images/houseparty/houseparty-progress.mp4"
import vidTwoFallback from "url:../../images/houseparty/houseparty-progress.webm"
import vidTwoPoster from "../../images/houseparty/houseparty-progress-poster.jpg"

export default class CaseOneIteration extends React.Component {
  render() {
    return (
      <section className="case-one-iteration">
        <h1 className="case-one-iteration-heading">
          How did this test?
        </h1>
        <video
          autoPlay
          className="case-one-iteration-video"
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
        <p className="case-one-iteration-text">
        From this work over that week, I was able to lead the conversation to the ultimate goal: a prototype to test against users, an excerpt from which you’re seeing here. Here were some key findings from this testing: 3 of 5 participants had difficulty locating notifications. 4 of 5 could figure out how to add a friend. 5 of 5 participants could figure out the wave feature (which is important to starting a chat!).
        </p>
        <video
          autoPlay
          className="case-one-iteration-video"
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
        <p className="case-one-iteration-text">
          With these results in mind, we felt good about the scope and got started. Being the sole designer, I focused on bringing the agreed upon feature set from sketches, to lofi prototypes, testing those with users, and bringing them to hifi. While doing this, I was also implementing designs and components on the front-end in storybook, and then having devs pick up those storybook components, hooking those up to data from Houseparty’s API, which itself was being built while working on this. So I had my hands full, but luckily this project panned out so smoothly—as if from a dream!
        </p>
      </section>
    )
  }
}
