import * as React from "react"
import imgOne from "../../images/home-intro-line-1.svg"

export default class HomeIntro extends React.Component {
  render() {
    return (
      <div className="home-intro">
        <h1 className="home-intro-heading-1">
          yam
        </h1>
        <h1 className="home-intro-heading-2">
          —il
        </h1>
        <h1 className="home-intro-heading-3">
          ah
        </h1>
        <img
          alt="A decorative line"
          className="home-intro-line"
          src={imgOne}
        />
        <div className="home-intro-role">
          <p className="home-intro-role-designer">
            <span className="home-intro-role-designer-1">
              D
            </span>
            <span className="home-intro-role-designer-2">
              e
            </span>
            <span className="home-intro-role-designer-3">
              sig
            </span>
            <span className="home-intro-role-designer-4">
              ner
            </span>
            <span className="home-intro-role-designer-5">
              &
            </span>
          </p>
          <p className="home-intro-role-developer">
            <span className="home-intro-role-developer-1">
              de
            </span>
            <span className="home-intro-role-developer-2">
              v
            </span>
            <span className="home-intro-role-developer-3">
              elo
            </span>
            <span className="home-intro-role-developer-4">
              per
            </span>
          </p>
        </div>
        <div className="home-intro-location">
          <p className="home-intro-location-top">
            <span className="home-intro-location-1">
              Base
            </span>
            <span className="home-intro-location-2">
              d
            </span>
            <span className="home-intro-location-3">
              in
            </span>
          </p>
          <p className="home-intro-location-bottom">
            <span className="home-intro-location-4">
              C
            </span>
            <span className="home-intro-location-5">
              a
            </span>
            <span className="home-intro-location-6">
              li
            </span>
            <span className="home-intro-location-7">
              for
            </span>
            <span className="home-intro-location-8">
              nia
            </span>
          </p>
        </div>
      </div>
    )
  }
}
