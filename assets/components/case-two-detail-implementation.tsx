import * as React from "react"

export default class DetailTwoImplementation extends React.Component {
  render() {
    return (
      <section className="detail-two-implementation">
        <div className="detail-two-implementation-separator">
          <p className="detail-two-implementation-separator-number">
            03
          </p>
          <p className="detail-two-implementation-separator-text">
            A second version
          </p>
        </div>
        <div className="detail-two-implementation-solution">
          <div className="detail-two-implementation-solution-text-wrapper">
            <p className="detail-two-implementation-solution-text-1">
              So, we agreed on a V2; we also needed to agree on what the priorities would be for that V2 work.
            </p>
            <p className="detail-two-implementation-solution-text-2">
              For me, what would mostly decide that would be what our users were talking about the most. So, to get some insight into that, I did some data analysis on the reviews in the App Store and the Play Store.
            </p>
            <p className="detail-two-implementation-solution-text-3">
              Here were some key takeaways:
            </p>
          </div>
        </div>
        <div className="detail-two-implementation-figures">
          <figure className="detail-two-implementation-figure-1">
            <p className="detail-two-implementation-figure-number">
              35%
            </p>
            <p className="detail-two-implementation-figure-text">
              of feedback mentioned confusing home states
            </p>
          </figure>
          <figure className="detail-two-implementation-figure-2">
            <p className="detail-two-implementation-figure-number">
              42%
            </p>
            <p className="detail-two-implementation-figure-text">
              of feedback mentioned a desire for notifications
            </p>
          </figure>
          <figure className="detail-two-implementation-figure-3">
            <p className="detail-two-implementation-figure-number">
              9%
            </p>
            <p className="detail-two-implementation-figure-text">
              of feedback mentioned not knowing when the next games might be
            </p>
          </figure>
        </div>
      </section>
    )
  }
}
