import * as React from "react"

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
            className="detail-one-planning-solution-img"
            src="http://placekitten.com/2000/1000"
          />
        </div>
      </section>
    )
  }
}
