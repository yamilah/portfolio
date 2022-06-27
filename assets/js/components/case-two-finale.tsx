import * as React from "react"

export default class CaseTwoFinale extends React.Component {
  render() {
    return (
      <section className="case-two-finale">
        <div className="case-two-finale-separator">
          <p className="case-two-finale-separator-number">
            04
          </p>
          <p className="case-two-finale-separator-text">
            Final thoughts
          </p>
        </div>
        <div className="case-two-finale-conclusion">
          <p className="case-two-finale-conclusion-intro">
            As we closed the book on this iteration, I did some reflecting on how things could have been different.
          </p>
          <div className="case-two-finale-conclusion-1">
            <h1 className="case-two-finale-conclusion-heading">
              Hardly testing?
            </h1>
            <p className="case-two-finale-conclusion-text">
              One thought was that we validated the product upfront, but didn’t do a ton of user testing as we released features—imagine how many opportunities could have surfaced if we had!
            </p>
          </div>
          <div className="case-two-finale-conclusion-2">
            <h1 className="case-two-finale-conclusion-heading">
              TV, meet phone
            </h1>
            <p className="case-two-finale-conclusion-text">
              Also, I noticed that people reported that looking between their TVs and their phones while playing caused some cognitive overload, and that there was some confusion around when to start/stop playing.
            </p>
          </div>
          <div className="case-two-finale-conclusion-3">
            <h1 className="case-two-finale-conclusion-heading">
              X marks success
            </h1>
            <p className="case-two-finale-conclusion-text">
              Perhaps some way that could have guided us was if we had a very clear definition of our success metrics.
            </p>
          </div>
        </div>
        <div className="case-two-finale-outro">
          <p className="case-two-finale-outro-text">
            Thank you!
          </p>
        </div>
      </section>
    )
  }
}
