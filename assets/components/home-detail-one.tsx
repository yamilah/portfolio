import * as React from "react"

export default class HomeDetailOne extends React.Component {
  render() {
    return (
      <div className="home-detail-one">
        <h1 className="home-detail-one-heading">
          <span className="home-detail-one-heading-1">
            house
          </span>
          <span className="home-detail-one-heading-2">
            party
          </span>
        </h1>
        <p className="home-detail-one-text">
          A social media app used to text and video chat with friends
        </p>
        <a href="">
          <span>
            ↗
          </span>
          View case study
        </a>
      </div>
    )
  }
}
