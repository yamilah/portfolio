import * as React from "react"

export default class DetailTwoDescription extends React.Component {
  render() {
    return (
      <section className="detail-two-desc">
        <div className="detail-two-highlights">
          <div className="detail-two-highlight">
            <h1 className="detail-two-highlight-heading">
              Opportunity
            </h1>
            <p className="detail-two-highlight-text">
              Prediction-based companion app to sports games
            </p>
          </div>
          <div className="detail-two-highlight">
            <h1 className="detail-two-highlight-heading">
              Challenges
            </h1>
            <p className="detail-two-highlight-text">
              Big pivots
            </p>
            <p className="detail-two-highlight-text">
              React Native
            </p>
            <p className="detail-two-highlight-text">
              iOS & Android
            </p>
          </div>
          <div className="detail-two-highlight">
            <h1 className="detail-two-highlight-heading">
              Team
            </h1>
            <p className="detail-two-highlight-text">
              Me (designer & front-end dev)
            </p>
            <p className="detail-two-highlight-text">
              1 other designer & developer
            </p>
            <p className="detail-two-highlight-text">
              2 developers
            </p>
            <p className="detail-two-highlight-text">
              2 PMs
            </p>
          </div>
          <div className="detail-two-highlight">
            <h1 className="detail-two-highlight-heading">
              Duration
            </h1>
            <p className="detail-two-highlight-text">
              5 months
            </p>
          </div>
        </div>
        <div className="detail-two-text-wrapper">
          <p className="detail-two-text">
            HOFR, or Hall of Famer, is a sports prediction mobile app, and you use it while watching a game. There were so many unexpected twists and turns on this project! I was also using React Native professionally for the first time.
          </p>
          <p className="detail-two-text">
            I was one of 2 designers and front-end developers on the team, and it was about 5 months long.
          </p>
          <p className="detail-two-text">
            To start things off, I'd like to provide a little context into how the product works. You can check it out on the <a href="https://apps.apple.com/us/app/hofr/id1400605641">App Store</a> or the <a href="https://play.google.com/store/apps/details?id=com.hofr">Play Store</a>—or just read on!
          </p>
        </div>
      </section>
    )
  }
}
