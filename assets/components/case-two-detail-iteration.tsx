import * as React from "react"
import imgOne from "../images/hofr/hofr-iteration-2.png"
import imgTwo from "../images/hofr/hofr-iteration-3.png"
import imgThree from "../images/hofr/hofr-iteration-4.png"
import imgFour from "../images/hofr/hofr-iteration-6.png"
import imgFive from "../images/hofr/hofr-iteration-7.jpg"
import vidOne from "../images/hofr/hofr-iteration-1.mp4"
import vidOneFallback from "../images/hofr/hofr-iteration-1.webm"
import vidOnePoster from "../images/hofr/hofr-iteration-1.png"
import vidTwo from "../images/hofr/hofr-iteration-5.mp4"
import vidTwoFallback from "../images/hofr/hofr-iteration-5.webm"
import vidTwoPoster from "../images/hofr/hofr-iteration-5.png"

export default class DetailTwoIteration extends React.Component {
  render() {
    return (
      <section className="detail-two-iteration">
        <div className="detail-two-iteration-separator">
          <p className="detail-two-iteration-separator-number">
            02
          </p>
          <p className="detail-two-iteration-separator-text">
            Iterations & testing
          </p>
        </div>
        <div className="detail-two-iteration-prototype">
          <video
            autoPlay
            className="detail-two-iteration-prototype-video dropshadow"
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
          <p className="detail-two-iteration-prototype-text-1">
            …a companion app to sports fans’ watching experience. So I mocked it up and prototyped it: which is what you’re seeing here.
          </p>
          <p className="detail-two-iteration-prototype-text-2">
            Much to almost the entire team’s surprise, our recruited participants loved competing with each others’ predictions while watching the game.
          </p>
          <p className="detail-two-iteration-prototype-text-3">
            Here were some key findings from this testing:
          </p>
        </div>
        <div className="detail-two-iteration-figures">
          <figure className="detail-two-iteration-figure-1">
            <p className="detail-two-iteration-figure-number">
              3/4
            </p>
            <p className="detail-two-iteration-figure-text">
              participants described this experience as “very fun”
            </p>
          </figure>
          <figure className="detail-two-iteration-figure-2">
            <p className="detail-two-iteration-figure-number">
              4/4
            </p>
            <p className="detail-two-iteration-figure-text">
              participants were “satisfied” with the fact that this was skill-based
            </p>
          </figure>
          <figure className="detail-two-iteration-figure-3">
            <p className="detail-two-iteration-figure-number">
              2/4
            </p>
            <p className="detail-two-iteration-figure-text">
              could figure out how to start playing
            </p>
          </figure>
          <figure className="detail-two-iteration-figure-4">
            <p className="detail-two-iteration-figure-number">
              3/4
            </p>
            <p className="detail-two-iteration-figure-text">
              said they would be “likely” to play this game again
            </p>
          </figure>
        </div>
        <div className="detail-two-iteration-progress">
          <img
            alt="An excerpted screen from the app showing it's game time"
            className="detail-two-iteration-progress-img-1 dropshadow"
            src={imgOne}
          />
          <img
            alt="An excerpted screen from the app showing the host speaking"
            className="detail-two-iteration-progress-img-2 dropshadow"
            src={imgTwo}
          />
          <img
            alt="An excerpted screen from the app showing you placed 982nd"
            className="detail-two-iteration-progress-img-3 dropshadow"
            src={imgThree}
          />
          <p className="detail-two-iteration-progress-text-1">
            With these results, we felt that there was strong enough evidence for a pivot from an HQ clone to a unique sports prediction and companion experience that stands on its own two legs.
          </p>
          <p className="detail-two-iteration-progress-text-2">
            So that’s what we did. We pivoted. We agreed on our MVP feature set and got started.
          </p>
          <p className="detail-two-iteration-progress-text-3">
            As the only other designer and front-end dev on the team, what this meant for me was that I got to work bringing ideas to lofi wireframes, and those to user tests, and those to hifi. And then to the codebase, of course.
          </p>
        </div>
        <div className="detail-two-iteration-visuals">
          <video
            autoPlay
            className="detail-two-iteration-visuals-video dropshadow"
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
            className="detail-two-iteration-visuals-img dropshadow"
            src={imgFour}
          />
          <p className="detail-two-iteration-visuals-text">
            But, also, visual explorations, I wanted to talk about that. I would’ve wanted to build something like what's on the left, which is styling I made. But, instead, we settled for what's on the right, which was a compromise I lead.
          </p>
        </div>
        <div className="detail-two-iteration-launch">
          <img
            alt="A HOFR teammate helping produce our first show with host Patrice Evra"
            className="detail-two-iteration-launch-img dropshadow"
            src={imgFive}
          />
          <p className="detail-two-iteration-launch-text-1">
            On the day of our MVP’s launch, the reality is that our production work was volatile, our code was extremely untested and fragile, among other compromises to meet our deadline, but we actually did launch.
          </p>
          <p className="detail-two-iteration-launch-text-2">
            The team managed to sign Patrice Evra, a world-renowned French football coach and former professional player; when we launched our first iteration, we got thousands of users in our first week, which is what we were looking for, so that was awesome!
          </p>
          <p className="detail-two-iteration-launch-text-3">
            But, also, everything was on fire.
          </p>
        </div>
      </section>
    )
  }
}
