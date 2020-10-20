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
      </section>
    )
  }
}
