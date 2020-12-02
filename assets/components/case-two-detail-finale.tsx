import * as React from "react"

export default class DetailTwoFinale extends React.Component {
  render() {
    return (
      <section className="detail-two-finale">
        <div className="detail-two-finale-separator">
          <p className="detail-two-finale-separator-number">
            04
          </p>
          <p className="detail-two-finale-separator-text">
            Final thoughts
          </p>
        </div>
        <div className="detail-two-finale-conclusion">
          <p className="detail-two-finale-conclusion-intro">
            We launched! We got thousands of users in the first week, which is exactly what we were tracking for. But we also got a temperature check from user feedback and behavior on what a V2 could be.
          </p>
          <div className="detail-two-finale-conclusion-1">
            <h1 className="detail-two-finale-conclusion-heading">
              Gamers—in the house
            </h1>
            <p className="detail-two-finale-conclusion-text">
              Firstly, EPIC games—the company behind Fortnite—acquired Houseparty after we finished this. Fortnite’s popular in the age group that uses Houseparty—why not do some research around this platform being another way for them to play together, and what that could mean for new design opportunities on Houseparty?
            </p>
          </div>
          <div className="detail-two-finale-conclusion-2">
            <h1 className="detail-two-finale-conclusion-heading">
              Testing easily
            </h1>
            <p className="detail-two-finale-conclusion-text">
              Also, I sacrificed convenience of testing for rigor—what I mean by this is that I often tested with people who were accessible to me, like friends and family and, while I could go pretty fast, I had to accept that they weren’t always our representative users, and I’d have to take my learnings with a grain of salt.
            </p>
          </div>
        </div>
        <div className="detail-two-finale-outro">
          <p className="detail-two-finale-outro-text">
            Thank you!
          </p>
        </div>
      </section>
    )
  }
}