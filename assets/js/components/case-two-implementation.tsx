import * as React from "react"
import imgOne from "../../images/hofr/hofr-implementation-1.png"
import imgTwo from "../../images/hofr/hofr-implementation-2.png"
import imgThree from "../../images/hofr/hofr-implementation-3.png"
import imgFour from "../../images/hofr/hofr-implementation-4.png"
import imgFive from "../../images/hofr/hofr-implementation-5.png"
import imgSix from "../../images/hofr/hofr-implementation-6.png"
import imgSeven from "../../images/hofr/hofr-implementation-7.png"
import imgEight from "../../images/hofr/hofr-implementation-8.png"

export default class CaseTwoImplementation extends React.Component {
  render() {
    return (
      <section className="case-two-implementation">
        <h1 className="case-two-implementation-heading">
          How did this get built?
        </h1>
        <p className="case-two-implementation-text">
          After agreeing to pick back up for a second rendition, we also agreed that we needed to settle on what our priorities for that second iteration would be. For me, what would mostly decide that would be what our users were talking about the most. So, to get some insight into that, I did some data analysis on the reviews in the App Store and the Play Store. Here were some key takeaways:
        </p>
        <div className="case-two-implementation-figures">
          <figure className="case-two-implementation-figure-1">
            35
          </figure>
          <figure className="case-two-implementation-figure-2">
            42
          </figure>
          <figure className="case-two-implementation-figure-3">
            9
          </figure>
        </div>
        <p className="case-two-implementation-text">
          35% of feedback mentioned confusing home states; 42% of feedback mentioned a desire for notifications; of feedback mentioned not knowing when the next games might be.
        </p>
        <p className="case-two-implementation-text">
          So we got to work on the second iteration. That meant more sketches, to lo-fis, to tests, to hi-fis for me. And more coding. Here, you can see my work on a big feature people were wanting: more clarity around the home screen. Previously, the home screen was a dead-end for many people. If you didn’t open the app close to when a game was coming up, the home screen would just tell you to come back later.
        </p>
        <div className="case-two-implementation-drawings">
          <img
            alt="An excerpted sketch of an improvement"
            className="case-two-implementation-drawing-1 case-two-implementation-img"
            src={imgOne}
          />
          <img
            alt="An excerpted sketch of an improvement"
            className="case-two-implementation-drawing-2 case-two-implementation-img"
            src={imgTwo}
          />
          <img
            alt="An excerpted sketch of an improvement"
            className="case-two-implementation-drawing-3 case-two-implementation-img"
            src={imgThree}
          />
          <img
            alt="An excerpted sketch of an improvement"
            className="case-two-implementation-drawing-4 case-two-implementation-img"
            src={imgFour}
          />
        </div>
        <p className="case-two-implementation-text">
          I use drawing tooling to reason through flows⁠—as you can see, there is a real relationship between what I draw and reason through, and what eventually ends up in the product.
        </p>
        <div className="case-two-implementation-improvements">
          <img
            alt="An excerpted screen showing an improvement"
            className="case-two-implementation-improvement-1 case-two-implementation-img"
            src={imgFive}
          />
          <img
            alt="An excerpted screen showing an improvement"
            className="case-two-implementation-improvement-2 case-two-implementation-img"
            src={imgSix}
          />
          <img
            alt="An excerpted screen showing an improvement"
            className="case-two-implementation-improvement-3 case-two-implementation-img"
            src={imgSeven}
          />
          <img
            alt="An excerpted screen showing an improvement"
            className="case-two-implementation-improvement-4 case-two-implementation-img"
            src={imgEight}
          />
        </div>
        <p className="case-two-implementation-text">
          But, now, the home screen gives way more context: when the next two games are, or what happens when you’re very close to a game, or just missed one, etc.
        </p>
      </section>
    )
  }
}
