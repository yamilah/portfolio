import * as React from "react"

export default class CaseOneDescription extends React.Component {
  render() {
    return (
      <section className="case-one-desc">
        <div className="case-one-desc-highlights">
          <div className="case-one-desc-highlight">
            <h1 className="case-one-desc-highlight-heading">
              Opportunity
            </h1>
            <p className="case-one-desc-highlight-text">
              Video chatting with up to 8 people on the web
            </p>
          </div>
          <div className="case-one-desc-highlight">
            <h1 className="case-one-desc-highlight-heading">
              Challenges
            </h1>
            <p className="case-one-desc-highlight-text">
              Short timeline, video chat tech, new platform
            </p>
          </div>
          <div className="case-one-desc-highlight">
            <h1 className="case-one-desc-highlight-heading">
              Team
            </h1>
            <p className="case-one-desc-highlight-text">
              Designer & dev (me)
            </p>
            <p className="case-one-desc-highlight-text">
              2 developers
            </p>
            <p className="case-one-desc-highlight-text">
              CTO & PM
            </p>
          </div>
          <div className="case-one-desc-highlight">
            <h1 className="case-one-desc-highlight-heading">
              Duration
            </h1>
            <p className="case-one-desc-highlight-text">
              3 months
            </p>
          </div>
        </div>
        <div className="case-one-desc-texts">
          <p className="case-one-desc-text">
            Houseparty is a face-to-face social network focuses on instant video chats of up to 8 people. I really loved working on this one—it was a short timeline, but I had a ton of fun working with the problems synchronous communication tends to require. You used to be able to check it out at <a href="https://app.houseparty.com" className="case-one-desc-text-link">app.houseparty.com</a>, and you'd be running my code! But no longer. I was the only designer and front-end developer on the team, but there were two other devs, a CTO, and the lead PM at the company. We had a little over three months. Also, I was designing along with the mobile side of this, so there was a ton of work to do that overlapped with the mobile experience. This took about three months.
          </p>
        </div>
      </section>
    )
  }
}
