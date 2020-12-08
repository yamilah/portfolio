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
        <div className="detail-two-planning-sprints">
          <div className="detail-two-planning-sprint-top">
            <p className="detail-two-planning-sprint-top-text-1">
              The team seemed super excited about this idea, but I was hoping we could slow down a bit and spend more time thinking about the problem before the solution.
            </p>
            <p className="detail-two-planning-sprint-top-text-2">
              Part of my hesitance was also because I felt it would be really hard to compete with HQ if they did release a sports offering. I made a case for a design sprint to explore some more options with the team to see what we would find—they said yes!
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
            <p className="detail-two-planning-sprint-bottom-text-1">
              So that’s what I did. I set up that sprint, and we all got to ideating—the actual sprint is what you’re seeing here. A lot of exercises were run, as the team wanted to understand where the original idea came from, and why.
            </p>
            <p className="detail-two-planning-sprint-bottom-text-2">
              Through this process, we learned more about our potential users, listing out our assumptions along the way about this potential product and how we might test them; once again, How Might Weing; user journeying; and so on.
            </p>
            <p className="detail-two-planning-sprint-bottom-text-3">
              So, to re-iterate, we started with an HQ clone. But, by the middle of the week, we had a real breadth of ideas to explore. Through those exercises I mentioned, I facilitated the team’s inclination towards one idea in particular…
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
