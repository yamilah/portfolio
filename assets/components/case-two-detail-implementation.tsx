import * as React from "react"
import imgOne from "../images/hofr/hofr-implementation-1.png"
import imgTwo from "../images/hofr/hofr-implementation-2.png"
import imgThree from "../images/hofr/hofr-implementation-3.png"
import imgFour from "../images/hofr/hofr-implementation-4.png"
import imgFive from "../images/hofr/hofr-implementation-5.png"
import imgSix from "../images/hofr/hofr-implementation-6.png"
import imgSeven from "../images/hofr/hofr-implementation-7.png"
import imgEight from "../images/hofr/hofr-implementation-8.png"

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
              So, we agreed on picking back up for a V2; we also needed to agree on what the priorities would be on it.
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
        <div className="detail-two-implementation-improvement">
          <div className="detail-two-implementation-improvement-top">
            <img
              alt="An excerpted sketch of an improvement"
              className="detail-two-implementation-improvement-top-img-1 dropshadow"
              src={imgOne}
            />
            <img
              alt="An excerpted sketch of an improvement"
              className="detail-two-implementation-improvement-top-img-2 dropshadow"
              src={imgTwo}
            />
            <img
              alt="An excerpted sketch of an improvement"
              className="detail-two-implementation-improvement-top-img-3 dropshadow"
              src={imgThree}
            />
            <img
              alt="An excerpted sketch of an improvement"
              className="detail-two-implementation-improvement-top-img-4 dropshadow"
              src={imgFour}
            />
            <p className="detail-two-implementation-improvement-top-text-1">
              So we got to work on the second iteration. That meant more sketches, to lo-fis, to tests, to hi-fis for me. And more coding. Here, you can see my work on a big feature people were wanting: more clarity around the home screen.
            </p>
            <p className="detail-two-implementation-improvement-top-text-2">
              Previously, the home screen was a dead-end for many people. If you didn’t open the app close to when a game was coming up, the home screen would just tell you to come back later.
            </p>
          </div>
          <div className="detail-two-implementation-improvement-middle">
            <img
              alt="An excerpted screen showing an improvement"
              className="detail-two-implementation-improvement-middle-img-1 dropshadow"
              src={imgFive}
            />
            <img
              alt="An excerpted screen showing an improvement"
              className="detail-two-implementation-improvement-middle-img-2 dropshadow"
              src={imgSix}
            />
            <img
              alt="An excerpted screen showing an improvement"
              className="detail-two-implementation-improvement-middle-img-3 dropshadow"
              src={imgSeven}
            />
            <img
              alt="An excerpted screen showing an improvement"
              className="detail-two-implementation-improvement-middle-img-4 dropshadow"
              src={imgEight}
            />
            <p className="detail-two-implementation-improvement-middle-text">
              But, now, the home screen gives way more context: when the next two games are, or what happens when you’re very close to a game, or just missed one, etc.
            </p>
          </div>
        </div>
      </section>
    )
  }
}
