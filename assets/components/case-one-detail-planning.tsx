import * as React from "react"
import imgOne from "../images/houseparty/houseparty-planning-1.jpg"
import imgTwo from "../images/houseparty/houseparty-planning-2.jpg"
import imgThree from "../images/houseparty/houseparty-planning-3.jpg"

export default class DetailOnePlanning extends React.Component {
  render() {
    return (
      <section className="detail-one-planning">
        <div className="detail-one-planning-separator">
          <p className="detail-one-planning-separator-number">
            01
          </p>
          <p className="detail-one-planning-separator-text">
            Initial validation & planning
          </p>
        </div>
        <div className="detail-one-planning-figures">
          <figure className="detail-one-planning-figure-1">
            <p className="detail-one-planning-figure-number">
              53%
            </p>
            <p className="detail-one-planning-figure-text">
              of their users are in the 16-24 age group, who are primarily school-aged
            </p>
          </figure>
          <figure className="detail-one-planning-figure-2">
            <p className="detail-one-planning-figure-number">
              58%
            </p>
            <p className="detail-one-planning-figure-text">
              of all devices purchased for US classrooms were Google devices
            </p>
          </figure>
          <figure className="detail-one-planning-figure-3">
            <p className="detail-one-planning-figure-number">
              17%
            </p>
            <p className="detail-one-planning-figure-text">
              of product requests were communicating a desire for cross platform experiences
            </p>
          </figure>
        </div>
        <div className="detail-one-planning-solution">
          <div className="detail-one-planning-solution-text-wrapper">
            <p className="detail-one-planning-solution-text-1">
              From this, we learned that there could be an opportunity for a web experience for Houseparty.
            </p>
            <p className="detail-one-planning-solution-text-2">
              I began at the problem, but I want to zoom out and show the solution I designed to give you a better idea of what we were working towards.
            </p>
            <p className="detail-one-planning-solution-text-3">
              So here’s how you use Houseparty: you sign up, log in, add a friend, jump in their “room,” and have a chat. Seem simple?
            </p>
          </div>
          <img
            alt="A video showing someone using Houseparty"
            className="detail-one-planning-solution-img"
            src="https://via.placeholder.com/2000x1000"
          />
        </div>
        <div className="detail-one-planning-sprints">
          <div className="detail-one-planning-sprint-top">
            <p className="detail-one-planning-sprint-top-text-1">
              Anything but! Making this translate to the web was a huge challenge. We didn’t have very much time, so we had to get serious about scoping this down, creating an MVP, and sticking to it to get to a meaningful launch.
            </p>
            <p className="detail-one-planning-sprint-top-text-2">
              To get to that MVP, the first thing I decided to do was have the team come together for a design sprint—allowing us to determine exactly what that MVP would look like in just a week.
            </p>
            <img
              alt="Members of the Houseparty web team together in a room, running a design sprint"
              className="detail-one-planning-sprint-top-img dropshadow"
              src={imgOne}
            />
          </div>
          <div className="detail-one-planning-sprint-bottom">
            <img
              alt="Stickies on a board with How Might Wes on them"
              className="detail-one-planning-sprint-bottom-img-1 dropshadow"
              src={imgTwo}
            />
            <p className="detail-one-planning-sprint-bottom-text">
              So what you’re seeing here are the pictures I took while leading the team through a design sprint, which involved a week of exercises like setting up a problem statement; interviewing employees and users alike to deeply understand Houseparty, its business, and its users; listing out our assumptions and how we might test them; user journeying; How Might Weing; and so on and so forth.
            </p>
            <img
              alt="Two members of the Houseparty team contemplating the product"
              className="detail-one-planning-sprint-bottom-img-2 dropshadow"
              src={imgThree}
            />
          </div>
        </div>
      </section>
    )
  }
}
