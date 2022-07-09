import * as React from "react"

export default class CaseTwoDescription extends React.Component {
  render() {
    return (
      <section className="case-two-desc">
        <h1 className="case-two-desc-heading">
          What’s HOFR?
        </h1>
        <div className="case-two-desc-highlights">
          <div className="case-two-desc-highlight">
            <h1 className="case-two-desc-highlight-heading">
              Opportunity
            </h1>
            <p className="case-two-desc-highlight-text">
              Prediction-based companion app to sports games
            </p>
          </div>
          <div className="case-two-desc-highlight">
            <h1 className="case-two-desc-highlight-heading">
              Challenges
            </h1>
            <p className="case-two-desc-highlight-text">
              Big pivots, cross platform, React Native
            </p>
          </div>
          <div className="case-two-desc-highlight">
            <h1 className="case-two-desc-highlight-heading">
              Team
            </h1>
            <p className="case-two-desc-highlight-text">
              2 designer & dev (myself included)
            </p>
            <p className="case-two-desc-highlight-text">
              2 developers
            </p>
            <p className="case-two-desc-highlight-text">
              1 PM
            </p>
          </div>
          <div className="case-two-desc-highlight">
            <h1 className="case-two-desc-highlight-heading">
              Duration
            </h1>
            <p className="case-two-desc-highlight-text">
              5 months
            </p>
          </div>
        </div>
        <p className="case-two-desc-text">
          HOFR, or Hall of Famer, is a sports prediction mobile app, and you use it while watching a game. There were so many unexpected twists and turns on this project! I was one of two designers and front-end developers on the team, along with two developers and one PM. It was about five months long. You can check it out on the <a href="https://apps.apple.com/us/app/hofr/id1400605641" className="case-two-desc-text-link">App Store</a> or the <a href="https://play.google.com/store/apps/details?id=com.hofr" className="case-two-desc-text-link">Play Store</a>—or just read on!
        </p>
      </section>
    )
  }
}
