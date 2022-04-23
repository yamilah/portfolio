import * as React from "react"
import HomeDetailOne from "../home-detail-one"
import HomeIntro from "../home-intro"
import HomePronunciation from "../home-pronunciation"

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <HomeIntro></HomeIntro>
        <HomeDetailOne></HomeDetailOne>
        <HomePronunciation></HomePronunciation>
      </div>
    )
  }
}
