import * as React from "react"

export default class DetailOneDescription extends React.Component {
  render() {
    return (
      <section className="detail-one-desc">
        <div className="detail-one-highlights">
          <div className="detail-one-highlight">
            <h1 className="detail-one-highlight-heading">
              Opportunity
            </h1>
            <p className="detail-one-highlight-text">
              Instantaneous video chatting of up to 8 people on the web
            </p>
          </div>
          <div className="detail-one-highlight">
            <h1 className="detail-one-highlight-heading">
              Team
            </h1>
            <p className="detail-one-highlight-text">
              Me (sole designer & front-end dev)
            </p>
            <p className="detail-one-highlight-text">
              2 developers
            </p>
            <p className="detail-one-highlight-text">
              CTO & PM
            </p>
          </div>
          <div className="detail-one-highlight">
            <h1 className="detail-one-highlight-heading">
              Challenges
            </h1>
            <p className="detail-one-highlight-text">
              Short timeline
            </p>
            <p className="detail-one-highlight-text">
              Video chat tech
            </p>
            <p className="detail-one-highlight-text">
              New product
            </p>
          </div>
          <div className="detail-one-highlight">
            <h1 className="detail-one-highlight-heading">
              Duration
            </h1>
            <p className="detail-one-highlight-text">
              3 months
            </p>
          </div>
        </div>
        <div className="detail-one-text-wrapper">
          <p className="detail-one-text">
            Houseparty is a face-to-face social network focuses on instant video chats of up to 8 people. I really loved working on this one—it was a short timeline, but I had a ton of fun working with the problems synchronous communication tends to require. Check it out at app.houseparty.com!
          </p>
          <p className="detail-one-text">
            I was the only designer and front-end developer on the team, but there were two other devs, a CTO, and the lead PM at the company. We had a little over three months.
          </p>
          <p className="detail-one-text">
            To start things off, I’d like to elaborate more on the problem and why we wanted to make this thing. The team at Houseparty said they really wanted to work with us on designing and building out a web experience. Working with them, we were able to tap into some research to see about why. Here were some key excerpts:
          </p>
        </div>
      </section>
    )
  }
}
