import * as React from "react"
import HomeLeftIntro from "../home-left-intro"
import HomeLeftPronunciation from "../home-left-pronunciation"

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main-left">
          <HomeLeftIntro></HomeLeftIntro>
          <HomeLeftPronunciation></HomeLeftPronunciation>
        </div>
      </div>
    )
  }
}
