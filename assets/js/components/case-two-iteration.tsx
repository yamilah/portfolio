import * as React from "react"
import imgOne from "../../images/hofr/hofr-iteration-2.png"
import imgTwo from "../../images/hofr/hofr-iteration-3.png"
import imgThree from "../../images/hofr/hofr-iteration-4.png"
import imgFour from "../../images/hofr/hofr-iteration-6.png"
import imgFive from "../../images/hofr/hofr-iteration-7.jpg"
import imgSix from "../../images/hofr/hofr-iteration-8.png"
import imgSeven from "../../images/hofr/hofr-iteration-9.png"
import imgEight from "../../images/hofr/hofr-iteration-10.png"
import imgNine from "../../images/hofr/hofr-iteration-11.png"
import imgTen from "../../images/hofr/hofr-iteration-12.png"
import imgEleven from "../../images/hofr/hofr-iteration-13.png"
import vidOne from "url:../../images/hofr/hofr-iteration-1.mp4"
import vidOneFallback from "url:../../images/hofr/hofr-iteration-1.webm"
import vidOnePoster from "../../images/hofr/hofr-iteration-1.png"
import vidTwo from "url:../../images/hofr/hofr-iteration-5.mp4"
import vidTwoFallback from "url:../../images/hofr/hofr-iteration-5.webm"
import vidTwoPoster from "../../images/hofr/hofr-iteration-5.png"

export default class CaseTwoIteration extends React.Component {
  render() {
    return (
      <section className="case-two-iteration">
        <h1 className="case-two-iteration-heading">
          How did this test?
        </h1>
        <p className="case-two-iteration-text">
          Much to almost the entire team’s surprise, our recruited participants loved competing with each others’ predictions while watching the game. Here were some key findings from our focus group:
        </p>
        <video
          autoPlay
          className="case-two-iteration-video case-two-iteration-prototype"
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
        <p className="case-two-iteration-text">
          Three of four participants described this experience as “very fun”; four of four participants were “satisfied” with the fact that this was skill-based; two of four could figure out how to start playing; three of four said they would be “likely” to play this game again.
        </p>
        <div className="case-two-iteration-imgs">
          <img
            alt="An excerpted screen from the app showing it's game time"
            className="case-two-iteration-img"
            src={imgOne}
          />
          <img
            alt="An excerpted screen from the app showing the host speaking"
            className="case-two-iteration-img"
            src={imgTwo}
          />
          <img
            alt="An excerpted screen from the app showing you placed 982nd"
            className="case-two-iteration-img"
            src={imgThree}
          />
        </div>
        <p className="case-two-iteration-text">
          With these results, we felt that there was strong enough evidence for a pivot from an HQ clone to a unique sports prediction and companion experience that stands on its own two legs. So that’s what we did. We pivoted. We agreed on our MVP feature set and got started. As the only other designer and front-end dev on the team, what this meant for me was that I got to work bringing ideas to lofi wireframes, and those to user tests, and those to hifi. And then to the codebase, of course.
        </p>
        <div className="case-two-iteration-visuals">
          <video
            autoPlay
            className="case-two-iteration-video case-two-iteration-visual-1"
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
          <img
            alt="An excerpted screen from the app showing a global leaderboard"
            className="case-two-iteration-img case-two-iteration-visual-2"
            src={imgFour}
          />
        </div>
        <p className="case-two-iteration-text">
          When it comes to visual design, I made both of these, but I would've wanted to build that first one. Notice the motion, change in color palette, etc. But, instead, we settled into the second. Changing the direction of the visual design becomes more difficult as time goes on.
        </p>
        <img
          alt="A HOFR teammate helping produce our first show with host Patrice Evra"
          className="case-two-iteration-img"
          src={imgFive}
        />
        <p className="case-two-iteration-text">
          On the day of our MVP’s launch, the reality is that our production work was volatile, our code was extremely untested and fragile, among other compromises to meet our deadline, but we actually did launch. The team managed to sign Patrice Evra, a world-renowned French football coach and former professional player; when we launched our first iteration, we got thousands of users in our first week, which is what we were looking for, so that was awesome! But, also, everything was on fire.
        </p>
        <div className="case-two-iteration-feedback">
          <img
            alt="A screenshot of HOFR in the Play Store"
            className="case-two-iteration-img case-two-iteration-feedback-1"
            src={imgSix}
          />
          <img
            alt="A screenshot of HOFR in the Play Store"
            className="case-two-iteration-img case-two-iteration-feedback-2"
            src={imgSeven}
          />
          <img
            alt="A screenshot of HOFR in the Play Store"
            className="case-two-iteration-img case-two-iteration-feedback-3"
            src={imgEight}
          />
          <img
            alt="A screenshot of HOFR in the Play Store"
            className="case-two-iteration-img case-two-iteration-feedback-4"
            src={imgNine}
          />
          <img
            alt="A screenshot of HOFR in the Play Store"
            className="case-two-iteration-img case-two-iteration-feedback-5"
            src={imgTen}
          />
          <img
            alt="A screenshot of HOFR in the Play Store"
            className="case-two-iteration-img case-two-iteration-feedback-6"
            src={imgEleven}
          />
        </div>
        <p className="case-two-iteration-text">
          All the attention was a good thing, though, as we got a ton of feedback really quickly. Which was to our advantage, because we wanted to go for a V2.
        </p>
      </section>
    )
  }
}
