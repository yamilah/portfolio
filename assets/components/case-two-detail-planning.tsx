import * as React from "react"
import imgOne from "../images/hofr/hofr-request.jpg"
import imgTwo from "../images/hofr/hofr-planning-2.jpg"
import imgThree from "../images/hofr/hofr-planning-3.jpg"
import imgFour from "../images/hofr/hofr-planning-4.jpg"
import vidOne from "../images/hofr/hofr-planning-1.mp4"
import vidOneFallback from "../images/hofr/hofr-planning-1.webm"
import vidOnePoster from "../images/hofr/hofr-planning-1.jpg"

export default class DetailTwoPlanning extends React.Component {
  render() {
    return (
      <section className="detail-two-planning">
        <div className="detail-two-planning-separator">
          <p className="detail-two-planning-separator-number">
            01
          </p>
          <p className="detail-two-planning-separator-text">
            Initial validation & planning
          </p>
        </div>
        <div className="detail-two-planning-context">
          <video
            autoPlay
            className="detail-two-planning-context-video dropshadow"
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
          <p className="detail-two-planning-context-text-1">
            So, to start things off, I'd like to provide a little context into how the product works:
          </p>
          <p className="detail-two-planning-context-text-2">
            You sign up, log in, join the game while watching the game on your TV, get prompted to make specific predictions based on what’s going on in the game, see how your predictions stacked up against the real thing, and, depending on how you’ve done, potentially make some cash!
          </p>
          <p className="detail-two-planning-context-text-3">
            But it didn’t start with this idea.
          </p>
        </div>
        <div className="detail-two-planning-request">
          <img
            alt="An image showing a few screen excerpts from HQ, a trivia app"
            className="detail-two-planning-request-img dropshadow"
            src={imgOne}
          />
          <p className="detail-two-planning-request-text-1">
            The initial idea was a clone of HQ, pictured here—if you’re not familiar with what that is: it’s a 12-question live video trivia game.
          </p>
          <p className="detail-two-planning-request-text-2">
            Users could win real money by answering all the questions and not being eliminated in multiple daily games.
          </p>
          <p className="detail-two-planning-request-text-3">
            So that was the problem they were wanting us to solve, that was the ask. To build that. For sports.
          </p>
        </div>
        <div className="detail-two-planning-figures">
          <figure className="detail-two-planning-figure-1">
            <p className="detail-two-planning-figure-number">
              53%
            </p>
            <p className="detail-two-planning-figure-text">
              of their users are in the 16-24 age group, who are primarily school-aged
            </p>
          </figure>
          <figure className="detail-two-planning-figure-2">
            <p className="detail-two-planning-figure-number">
              58%
            </p>
            <p className="detail-two-planning-figure-text">
              of all devices purchased for US classrooms were Google devices
            </p>
          </figure>
          <figure className="detail-two-planning-figure-3">
            <p className="detail-two-planning-figure-number">
              17%
            </p>
            <p className="detail-two-planning-figure-text">
              of product requests were communicating a desire for cross platform experiences
            </p>
          </figure>
        </div>
        <div className="detail-two-planning-solution">
          <div className="detail-two-planning-solution-text-wrapper">
            <p className="detail-two-planning-solution-text-1">
              From this, we learned that there could be an opportunity for a web experience for Houseparty.
            </p>
            <p className="detail-two-planning-solution-text-2">
              I began at the problem, but I want to zoom out and show the solution I designed to give you a better idea of what we were working towards.
            </p>
            <p className="detail-two-planning-solution-text-3">
              So here’s how you use Houseparty: you sign up, log in, add a friend, jump in their “room,” and have a chat. Seem simple?
            </p>
          </div>
        </div>
        <div className="detail-two-planning-sprints">
          <div className="detail-two-planning-sprint-top">
            <p className="detail-two-planning-sprint-top-text-1">
              So that’s what I did. I set up that sprint, and we all got to ideating—the actual sprint is what you’re seeing here.
            </p>
            <p className="detail-two-planning-sprint-top-text-2">
              This involved trying to understand where the original idea really came from—and why.
            </p>
            <img
              alt="Members of the Houseparty web team together in a room, running a design sprint"
              className="detail-two-planning-sprint-top-img dropshadow"
              src={imgTwo}
            />
          </div>
          <div className="detail-two-planning-sprint-bottom">
            <img
              alt="Stickies on a board with How Might Wes on them"
              className="detail-two-planning-sprint-bottom-img-1 dropshadow"
              src={imgFour}
            />
            <p className="detail-two-planning-sprint-bottom-text">
            Learning more about our potential users, listing out our assumptions about this potential product and how we might test them; once again, How Might Weing; user journeying; and so on.
            </p>
            <img
              alt="Two members of the Houseparty team contemplating the product"
              className="detail-two-planning-sprint-bottom-img-2 dropshadow"
              src={imgThree}
            />
          </div>
        </div>
      </section>
    )
  }
}
