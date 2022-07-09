import * as React from "react"
import imgOne from "../../images/hofr/hofr-planning-request.jpg"
import imgTwo from "../../images/hofr/hofr-planning-2.jpg"
import imgThree from "../../images/hofr/hofr-planning-3.jpg"
import imgFour from "../../images/hofr/hofr-planning-4.jpg"
import vidOne from "url:../../images/hofr/hofr-planning-1.mp4"
import vidOneFallback from "url:../../images/hofr/hofr-planning-1.webm"
import vidOnePoster from "../../images/hofr/hofr-planning-1.jpg"

export default class CaseTwoPlanning extends React.Component {
  render() {
    return (
      <section className="case-two-planning">
        <h1 className="case-two-planning-heading">
          How did this start?
        </h1>
        <p className="case-two-planning-text">
          So, to start things off, I'd like to provide a little context into how the product works: you sign up, log in, join the game while watching the game on your TV, get prompted to make specific predictions based on what’s going on in the game, see how your predictions stacked up against the real thing, and, depending on how you’ve done, potentially make some cash!
        </p>
        <video
          autoPlay
          className="case-two-planning-video case-two-planning-phone"
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
        <p className="case-two-planning-text">
          But it didn’t start with this idea. The initial idea was a clone of HQ, pictured here—if you’re not familiar with what that is: it’s a 12-question live video trivia game. Users could win real money by answering all the questions and not being eliminated in multiple daily games. So that was the problem they were wanting us to solve, that was the ask. To build that. For sports.
        </p>
        <img
          alt="An image showing a few screen excerpts from HQ, a trivia app"
          className="case-two-planning-img"
          src={imgOne}
        />
        <p className="case-two-planning-text">
          The team seemed super excited about this idea, but I was hoping we could slow down a bit and spend more time thinking about the problem before the solution. Part of my hesitance was also because I felt it would be really hard to compete with HQ if they did release a sports offering. I made a case for a design sprint to explore some more options with the team to see what we would find—they agreed!
        </p>
        <div className="case-two-planning-imgs">
          <img
            alt="Members of the Houseparty web team together in a room, running a design sprint"
            className="case-two-planning-img case-two-planning-img-1"
            src={imgTwo}
          />
          <img
            alt="Two members of the Houseparty team contemplating the product"
            className="case-two-planning-img case-two-planning-img-2"
            src={imgThree}
          />
        </div>
        <p className="case-two-planning-text">
          So that’s what I did. I set up that sprint, and we all got to ideating—the actual sprint is what you’re seeing here. A lot of exercises were run, as I wanted to understand where the original idea came from, and why it came to be. Through this process, we learned more about our potential users, listed out our assumptions, and ideas about how we might test them: How Might Weing; user journeying; and so on.
        </p>
        <p className="case-two-planning-text">
          To re-iterate, we started with an HQ clone. But, by the middle of the week, we had a real breadth of ideas to explore. Through those exercises I mentioned, I facilitated the team’s inclination towards one idea in particular…
        </p>
      </section>
    )
  }
}
