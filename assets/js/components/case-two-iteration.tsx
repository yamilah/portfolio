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
          So I mocked it up and prototyped it: which is what you’re seeing here.
        </p>
        <video
          autoPlay
          className="case-two-iteration-video"
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
          Much to almost the entire team’s surprise, our recruited participants loved competing with each others’ predictions while watching the game. Here were some key findings from our focus group:
        </p>
        <div className="case-two-iteration-figures">
          <figure className="case-two-iteration-figure-1">
            <p className="case-two-iteration-figure-number">
              3/4
            </p>
            <p className="case-two-iteration-figure-text">
              participants described this experience as “very fun”
            </p>
          </figure>
          <figure className="case-two-iteration-figure-2">
            <p className="case-two-iteration-figure-number">
              4/4
            </p>
            <p className="case-two-iteration-figure-text">
              participants were “satisfied” with the fact that this was skill-based
            </p>
          </figure>
          <figure className="case-two-iteration-figure-3">
            <p className="case-two-iteration-figure-number">
              2/4
            </p>
            <p className="case-two-iteration-figure-text">
              could figure out how to start playing
            </p>
          </figure>
          <figure className="case-two-iteration-figure-4">
            <p className="case-two-iteration-figure-number">
              3/4
            </p>
            <p className="case-two-iteration-figure-text">
              said they would be “likely” to play this game again
            </p>
          </figure>
        </div>
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
        <p className="case-two-iteration-text">
          With these results, we felt that there was strong enough evidence for a pivot from an HQ clone to a unique sports prediction and companion experience that stands on its own two legs. So that’s what we did. We pivoted. We agreed on our MVP feature set and got started. As the only other designer and front-end dev on the team, what this meant for me was that I got to work bringing ideas to lofi wireframes, and those to user tests, and those to hifi. And then to the codebase, of course.
        </p>
        <div className="case-two-iteration-visuals">
          <video
            autoPlay
            className="case-two-iteration-visuals-video dropshadow"
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
            className="case-two-iteration-visuals-img dropshadow"
            src={imgFour}
          />
          <p className="case-two-iteration-visuals-text">
            But, also, visual explorations, I wanted to talk about that. I would’ve wanted to build something like what's on the left, which is styling I made. But, instead, we settled for what's on the right, which was a compromise I lead.
          </p>
        </div>
        <div className="case-two-iteration-launch">
          <img
            alt="A HOFR teammate helping produce our first show with host Patrice Evra"
            className="case-two-iteration-launch-img dropshadow"
            src={imgFive}
          />
          <p className="case-two-iteration-launch-text-1">
            On the day of our MVP’s launch, the reality is that our production work was volatile, our code was extremely untested and fragile, among other compromises to meet our deadline, but we actually did launch.
          </p>
          <p className="case-two-iteration-launch-text-2">
            The team managed to sign Patrice Evra, a world-renowned French football coach and former professional player; when we launched our first iteration, we got thousands of users in our first week, which is what we were looking for, so that was awesome!
          </p>
          <p className="case-two-iteration-launch-text-3">
            But, also, everything was on fire.
          </p>
        </div>
        <div className="case-two-iteration-feedback">
          <img
            alt="A screenshot of HOFR in the Play Store"
            className="case-two-iteration-feedback-img-1 dropshadow"
            src={imgSix}
          />
          <img
            alt="A screenshot of HOFR in the Play Store"
            className="case-two-iteration-feedback-img-2 dropshadow"
            src={imgSeven}
          />
          <img
            alt="A screenshot of HOFR in the Play Store"
            className="case-two-iteration-feedback-img-3 dropshadow"
            src={imgEight}
          />
          <img
            alt="A screenshot of HOFR in the Play Store"
            className="case-two-iteration-feedback-img-4 dropshadow"
            src={imgNine}
          />
          <img
            alt="A screenshot of HOFR in the Play Store"
            className="case-two-iteration-feedback-img-5 dropshadow"
            src={imgTen}
          />
          <img
            alt="A screenshot of HOFR in the Play Store"
            className="case-two-iteration-feedback-img-6 dropshadow"
            src={imgEleven}
          />
          <p className="case-two-iteration-feedback-text">
            All the attention was a good thing, though, as we got a ton of feedback really quickly. Which was a blessing—because we wanted to go for a V2.
          </p>
        </div>
      </section>
    )
  }
}
